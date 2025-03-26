import React from "react"; // ✅ Explicitly import React
import {redirect}from "next/navigation"
const NotFound = () =>
{
    redirect:('/')
}
export default NotFound