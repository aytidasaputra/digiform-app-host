import IMGSCR from "../../assets/images/svg/img-secure-login.svg";
import { useFormik } from "formik";

function Login() {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        }
    })

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.iOS() || isMobile.Opera());
        }
    };

    console.log("VALUES", formik.values)

    return (
        <div>
            <div className="flex items-center justify-around h-screen">
                {/* img secure */}
                <div hidden={isMobile.Android() || isMobile.iOS()} className="">
                    <h1 className="text-4xl font-semibold mb-16">
                        <span className="text-blue-digi hover:text-orange-digi">DIGI</span><span className="text-orange-digi hover:text-blue-digi">FORM</span>
                    </h1>
                    <img className="object-cover h-100 w-60" src={IMGSCR} alt="Ada kesalahan." />
                </div>
                {/* form login */}
                <div>
                    <div className="w-full max-w-xs">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Username
                                </label>
                                <input onChange={formik.handleChange} value={formik.values.username} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input onChange={formik.handleChange} value={formik.values.password} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700 w-full">
                                    Login
                                </button>
                            </div>
                        </form>
                        <p className="text-center text-gray-500 text-xs">
                            &copy;2023 IT - BRI Life. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login
