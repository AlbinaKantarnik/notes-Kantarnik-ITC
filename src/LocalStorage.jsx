import { useEffect, useState } from "react";

export default function LocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        return localStorage.getItem(key) ?? defaultValue
    })

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, setValue])

    return [value, setValue];
}