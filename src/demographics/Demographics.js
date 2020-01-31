import React from 'react'
import './Demographics.css';

function Demographics (props) {

  return (
    <body classNameName="Demographics">

	  <h1>DEMOGRAPHICS</h1>

    <div className="grid-container"/>

      <div className="grid-item">
        <h2>Patient Viewer</h2>
        <ul>
                  <i className="fas fa-user-alien fa-2x"></i>
              </ul>
      </div>

      <div className="grid-item"/>

        <form className="patientinformation">
          <div>
            <h2>Patient Information</h2>
            <input type="text" name="fname" placeholder="Enter First Name" required=""/>
            <input type="text" name="mname" placeholder="Enter Middle Name" />
            <input type="text" name="lname" placeholder="Enter Last Name" required=""/>
          </div>

          <br/>

          <div className="Address">

            <input type="text" name="address" placeholder="Address" required=""/>					 
            <input type="email" name="email" placeholder="email@email.com" required=""/>	
            <input type="Phone" name="phone" placeholder="Phone Number" required=""/>
          </div>

          <br/>	

          <div className="City">
              <input type="text" name="city" placeholder="City" required=""/>
              <input type="text" name="state" placeholder="State" required=""/>	
              <input type="Zipcode" name="zipcode" placeholder="Zipcode" required=""/>	
          </div>

				  <div>
						<ol>
							<li>
								<label>Religion </label><br/> 
								<input type="text" name="religion" placeholder="Enter Religion"/>
							</li>
							<li>
								<label>Gender </label><br/> 
								<select>
									<option>Male</option>
								</select>
							</li>
							<li>
								<label>State of Change </label><br/> 
								<select>
									<option>confirmation</option>
								</select>
							</li>
							<li>
								<label>Preferred Pronoun </label><br/> 
								<select>
									<option>He/Him</option>
								</select>
							</li>
							<li>
								<label>Race </label><br/> 
								<select>
									<option>Caucasian</option>
								</select>
							</li>
						</ol>
				</div>
        </form>	

		<div className="grid-item">

			<h2>Patient Demographics</h2>

			<form className="Demographics">

				<div>

					<ol>

						<li>
							<label>Religion </label><br/> 
							<input type="text" name="religion" placeholder="Enter Religion"/>
						</li>

						<li>
							<label>Gender </label><br/> 
							<select>
								<option>Male</option>
							</select>
						</li>

						<li>
							<label>State of Change </label><br/> 
							<select>
								<option>confirmation</option>
							</select>
						</li>

						<li>
							<label>Preferred Pronoun </label><br/> 
							<select>
								<option>He/Him</option>
							</select>
						</li>

						<li>
							<label>Race </label><br/> 
							<select>
								<option>Caucasian</option>
							</select>
						</li>

					</ol>

				</div>

			</form>

    </div> 
  


	<h2>Anthropometrics</h2>

		<div className="grid-container">

			<div className="grid-item">

				<h3>Weight History</h3>

				<form className="Anthropometrics">

					<div className="form">
						<input type="text" name="weighthistory" placeholder="Enter weight history" required=""/>

						<h4>Have you recently gained or lost weight</h4>

						<input type="checkbox" name="weightgainyes" value="Yes"/>Yes 
            <input type="checkbox" name="weightgainno" value="Yes"/>No
						<input type="text" name="yesweight" placeholder="Describe" />
					</div>

				</form>

		  </div>

			<div className="grid-item">

				<h3>Patient Measurments</h3>

				<form className="Anthropometrics">

					<ol>
						<li>
							<input type="text" name="Height" placeholder="Height [cm]" required=""/>
						</li>
						<li>
							<input type="text" name="HeadCircumfrance" placeholder="Head Circumfrance [cm]" required=""/>
						</li>
						<li>
							<input type="text" name="WaistCircumfrance" placeholder="Waist Circumfrance [cm]" required=""/>
						</li>
						<li>
							<input type="text" name="HipCircumfrance" placeholder="Hip Circumfrance [cm]" required=""/>
						</li>
						<li>
							<input type="text" name="Waisthip" placeholder="Waist to hip ratio" required=""/>
						</li>
						<li>
							<input type="text" name="Waistheight" placeholder="Waist to height ratio" required=""/>
						</li>
					</ol>

				</form>

			</div>
			
      <div className="grid-item">

				<h3>Body Mass Index</h3>

				<form className="Anthropometrics">
					<ol>
						<li>
							<input type="text" name="BMI" placeholder="BMI [kg/m2]" required=""/>
						</li>
						<li>
							<input type="text" name="LeanBodyMass" placeholder="Lean Body Mase [kg]" required=""/>
						</li>
						<li>
							<input type="text" name="FatMass" placeholder="Fat Mass [kg]" required=""/>
						</li>
					</ol>
				</form>

			</div>

			<div className="grid-item">

				<h3>Skin Fold Thickness</h3>

				<form className="Anthropometrics">

					<ol>
						<li>
							<input type="text" name="Bicep" placeholder="Bicep [cm]" required=""/>
						</li>
						<li>
							<input type="text" name="Triceps" placeholder="Triceps [cm]" required=""/>
						</li>
						<li>
							<input type="text" name="Subscapular" placeholder="Subscapular [cm]" required=""/>
						</li>
						<li>
							<input type="text" name="Suprailiac" placeholder="Suprailiac [cm]" required=""/>
						</li>
					</ol>

				</form>

		</div>

	</div>

	<h2>Medical History</h2>

	<div className="grid-container">
		
	</div>
  
</body>

  );
}

  export default Demographics;