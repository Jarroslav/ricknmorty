import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddNewTodoForm = ({ onAddTodo, customError }) => {
    // Initialize a form instance with useFormik hook
    const formik = useFormik({
        // Disable validation onChange and onBlur for keeping validation errors less annoying
        validateOnChange: false,
        validateOnBlur: false,
        // Initial form values
        initialValues: {
            todo: '',
        },
        // Form values validation with Yup
        validationSchema: Yup
            .object()
            .shape({
                    todo: Yup.string()
                        .min(3, 'Text is too short.')
                        .max(20, 'Text is too long.')
                        .required('Text is required.')
                }
            ),
        onSubmit: (values, { resetForm }) => {
            onAddTodo(values.todo);

            // Reset the form after submitting successfully
            resetForm();
        },
    })

    // Get an error from formik.errors to show up because I don't like showing all of them at once
    const errorKeys = Object.keys(formik.errors);

    const aFormikError = errorKeys.length > 0 ? formik.errors[errorKeys[0]] : null;

    const error = customError || aFormikError

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="watchlist-form">
                <label>
                    <input
                        id="todo"
                        name="todo"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.todo}
                        autoComplete="off"
                        placeholder="Add to watch list"
                        className="filter-search"
                    />
                    {error && <span className="watchlist-form__error">{error}</span>}
                </label>

                <button type="submit" className="filter-submit">Add</button>
            </form>

        </>
    )
};

export default React.memo(AddNewTodoForm);