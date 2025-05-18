import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import Register from "../assets/Register.png";
import {
  validateInputs
} from "../utils/RegisterPage.policy";
import { register } from "../services/AuthService";
import { Link } from "react-router-dom";

const cities = [
  { key: 'Skopje', value: 'Skopje' },
  { key: 'Bitola', value: 'Bitola' },
  { key: 'Kumanovo', value: 'Kumanovo' },
  { key: 'Prilep', value: 'Prilep' },
  { key: 'Tetovo', value: 'Tetovo' },
  { key: 'Veles', value: 'Veles' },
  { key: 'Stip', value: 'Stip' },
  { key: 'Ohrid', value: 'Ohrid' },
  { key: 'Gostivar', value: 'Gostivar' },
  { key: 'Strumica', value: 'Strumica' },
  { key: 'Kavadarci', value: 'Kavadarci' },
  { key: 'Kocani', value: 'Kocani' },
  { key: 'Kicevo', value: 'Kicevo' },
  { key: 'Struga', value: 'Struga' },
  { key: 'Radovis', value: 'Radovis' },
  { key: 'Gevgelija', value: 'Gevgelija' },
  { key: 'KrivaPalanka', value: 'Kriva Palanka' },
  { key: 'SvetiNikole', value: 'Sveti Nikole' },
  { key: 'Negotino', value: 'Negotino' },
  { key: 'Delcevo', value: 'Delcevo' },
  { key: 'Resen', value: 'Resen' },
  { key: 'Berovo', value: 'Berovo' },
  { key: 'Probistip', value: 'Probistip' },
  { key: 'Kratovo', value: 'Kratovo' },
  { key: 'DemirHisar', value: 'Demir Hisar' },
  { key: 'Bogdanci', value: 'Bogdanci' },
  { key: 'Krusevo', value: 'Krusevo' },
  { key: 'MakedonskiBrod', value: 'Makedonski Brod' },
  { key: 'DemirKapija', value: 'Demir Kapija' },
  { key: 'Pehcevo', value: 'Pehcevo' },
  { key: 'Valandovo', value: 'Valandovo' },
  { key: 'Vinica', value: 'Vinica' },
];

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    city: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs(formData);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((msg) => msg);
    if (hasErrors) return;

    try {
      register(formData);
    } catch (error) {
      setSubmitSuccess("Registration failed. Please try again.");
    }
  };

  return (
    <div className="h-screen flex mb-12">
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <div className="mb-6 flex items-center">
          <img src={Logo} alt="Learnify Logo" className="h-10 w-10 mr-2" />
          <h1 className="text-3xl font-bold text-blue-700">Learnify</h1>
        </div>
        <p className="text-xl italic text-blue-700 text-center max-w-sm">
          One step closer to your goals. Join now and start learning!
        </p>
        <img
          src={Register}
          alt="Illustration with checklist and calendar"
          className="mt-10 w-3/4 max-w-md"
        />
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center px-20 overflow-y-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Register Now!</h2>

        <form className="space-y-5 w-full max-w-md" onSubmit={handleSubmit}>
          {[
            { label: "Name", id: "name", type: "text", placeholder: "Enter your full name" },
            { label: "Email", id: "email", type: "email", placeholder: "Enter your email" },
            { label: "Password", id: "password", type: "password", placeholder: "Enter your password" },
            { label: "Confirm Password", id: "confirmPassword", type: "password", placeholder: "Confirm your password" },
            { label: "Phone Number", id: "phoneNumber", type: "tel", placeholder: "Enter your phone number" },
            { label: "Address", id: "address", type: "text", placeholder: "Enter your address" },
          ].map(({ label, id, type, placeholder }) => (
            <div key={id}>
              <label htmlFor={id} className="block text-blue-700 font-medium mb-1">{label}:</label>
              <input
                type={type}
                id={id}
                value={formData[id]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id]}</p>}
            </div>
          ))}

          <div>
            <label htmlFor="city" className="block text-blue-700 font-medium mb-1">City:</label>
            <select
              id="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select city</option>
              {cities.map(city => (
                <option key={city.key} value={city.value}>
                  {city.value}
                </option>
              ))}
            </select>
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>

          <div>
            <label htmlFor="gender" className="block text-blue-700 font-medium mb-1">Gender:</label>
            <select
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
          </div>

          {submitSuccess && <p className="text-center mt-2 text-blue-600">{submitSuccess}</p>}

          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
          >
            Register
          </button>
          <Link
            to="/login"
            className="block text-center text-sm text-blue-700 mt-4 hover:underline"
          >
            Already have an account? Log in
          </Link>

        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
