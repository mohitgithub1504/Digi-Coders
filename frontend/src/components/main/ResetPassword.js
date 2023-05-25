import { useState } from 'react';

import Swal from 'sweetalert2';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const ResetPassword = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState('');

  const [otp, setOTP] = useState('');
  const [showReset, setShowReset] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const generateOTP = () => {
    let tempOtp = parseInt(Math.random().toFixed(4).substr(`-${4}`));
    setOTP(tempOtp);
    return tempOtp;
  };

  const passwordForm = {
    otp: '',
    password: '',
    confirm: ''
  };

  const sendOTP = () => {
    fetch('http://localhost:5000/util/sendmail', {
      method: 'POST',
      body: JSON.stringify({
        to: email,
        subject: 'Password Reset',
        text: 'This is your OTP for password reset ' + generateOTP()
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res.status);
      console.log(otp);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'success',
          text: 'OTP Sent Successfully'
        });
      }
      return res.json();
    });
  };

  const verifyUser = () => {
    fetch('http://localhost:5000/user/getbyemail/' + email)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (!data) {
          console.log('not found!!');
          Swal.fire({
            icon: 'error',
            title: 'Email not registered!!'
          });
        } else {
          setCurrentUser(data);
          setShowReset(true);
          sendOTP();
        }
      });
  };

  const verifyOTP = (formdata) => {
    console.log(formdata.otp, otp);
    if (otp == formdata.otp) {
      console.log('otp matched');
      resetPassword(formdata);
    } else {
      console.log('otp not matched');
      Swal.fire({
        icon: 'error',
        title: 'failed',
        text: 'Enter Correct OTP'
      });
    }
  };
  const resetPassword = ({ password }) => {
    console.log(password);
    fetch('http://localhost:5000/user/update/' + currentUser._id, {
      method: 'PUT',
      body: JSON.stringify({ password: password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        console.log('reset');
        if (res.status === 200)
          Swal.fire({
            icon: 'success',
            title: 'Password Reset Success!!'
          }).then(() => {
            navigate('/main/signin');
          });
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string()
    //   .matches(
    //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //     'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    //   )
      .required('Password is Required'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password Confirmation is Required')
  });

  const showResetForm = () => {
    if (showReset) {
      return (
        <div className="card mt-5" sx={{ width: 451 }} align="center">
          <div className="card-body" align="center">
            <Formik initialValues={passwordForm} onSubmit={verifyOTP} validationSchema={validationSchema}>
              {({ values, handleSubmit, handleChange, errors }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    className="w-100 mt-3"
                    placeholder="Enter OTP recieved in Email"
                    label="Enter OTP"
                    variant="outlined"
                    id="otp"
                    value={values.otp}
                    onChange={handleChange}
                  />

                  <input className="w-100 mt-3" placeholder="Enter New Password" type="password" id="password" value={values.password} onChange={handleChange} />
                  {errors.password && <div className="text-danger">{errors.password}</div>}

                  <input className="w-100 mt-3" placeholder="Confirm Password" id="confirm" type="password" value={values.confirm} onChange={handleChange} />

                  {errors.confirm && <div className="text-danger">{errors.confirm}</div>}

                  <button className="btn btn-primary mt-5" type="submit" fullWidth>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="reset-card" align="center">
      <div className="card mt-5" sx={{ width: 451 }} align="center">
        <div className="card-body" align="center">
          <input className="w-100 mt-3" placeholder="Enter Your Email" label="Email" variant="outlined" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <button color="success" variant="contained" className="mt-5" type="submit" fullWidth onClick={verifyUser}>
            Submit
          </button>
        </div>
      </div>

      {showResetForm()}
    </div>
  );
};

export default ResetPassword;
