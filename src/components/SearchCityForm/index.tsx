import React from 'react';
import { Formik, FormikProps } from 'formik';

import './styles.scss';

interface FormValues {
  city: string;
}

interface FormError {
  city?: string;
}

const SearchCityForm: React.FC = () => {
  return (
    <div className="search-city-form">
      <Formik
        initialValues={{
          city: '',
        }}
        validate={(values: FormValues) => {
          const errors: FormError = {};
          if (!values.city) {
            errors.city = 'Required';
          }
          return errors;
        }}
        onSubmit={(values: FormValues) => {
          console.log(values);
        }}
        validateOnMount
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          isValid,
        }: FormikProps<FormValues>) => (
          <form className="search-city-form__form" onSubmit={handleSubmit}>
            <h1 className="search-city-form__header">Search City</h1>
            <div className="search-city-form__group">
              <label className="search-city-form__label" htmlFor="cityName">
                City:
                <input
                  name="city"
                  className="search-city-form__input-text"
                  type="text"
                  id="cityName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
              </label>
            </div>
            <div className="search-city-form__button-group">
              <button
                type="submit"
                disabled={!isValid}
                className="search-city-form__button"
              >
                Search
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchCityForm;
