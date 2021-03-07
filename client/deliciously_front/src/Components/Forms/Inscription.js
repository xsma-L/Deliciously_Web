import React, { useState, useEffect, useRef } from "react";



const Inscription = () => {

    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [onSubmitting, setOnSubmitting] = useState<boolean>(false);
    const [onBlur, setOnBlur] = useState<boolean>(false);

    const formRendered = useRef(true);

    useEffect(() => {
      if (formRendered.current) {
        setValues(initialValues);
        setErrors({});
        setTouched({});
        setOnSubmitting(false);
        setOnBlur(false);
      }
      formRendered.current = false;
    }, [initialValues]);

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setValues({ ...values, [name]: value });
      };

    return (
        <div id="inscription">
            
        </div>
    )
}

export default Inscription
