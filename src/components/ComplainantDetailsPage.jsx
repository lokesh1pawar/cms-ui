import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ComplainantDetailsPage.css';
import {
  complainantDetailsInitialState,
  progressSteps,
} from '../utils/formInitialStates';

const ComplainantDetailsPage = () => {
  const [formData, setFormData] = useState(complainantDetailsInitialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="complainant-page">
      <div className="progress-bar">
        {progressSteps.map((step, index) => (
          <div
            key={step}
            className={`progress-step ${index === 1 ? 'active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>

      <h1 className="page-title">Complainant Details</h1>

      <form className="form-container">
        <div className="form-group">
          <label>Do you want to remain anonymous during this process?*</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="isAnonymous"
                value="yes"
                checked={formData.isAnonymous === 'yes'}
                onChange={handleInputChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="isAnonymous"
                value="no"
                checked={formData.isAnonymous === 'no'}
                onChange={handleInputChange}
              />
              <span>No</span>
            </label>
          </div>
          <div className="disclaimer-box">
            <p className="disclaimer-title">Disclaimer:</p>
            <p className="disclaimer-text">
              If you select yes, CMS will not share your Information with the
              Filed Against Entity (FAE) during the investigation process.
              However, information provided in this complaint is subject to
              rules and policies under the Freedom of Information Act (FOIA).
            </p>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="organizationName">
            Complainant Organization Name*
          </label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="organizationType">
            Complainant Organization Type
          </label>
          <select
            id="organizationType"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="--None--">--None--</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="organizationTypeOther">
            Complainant Organization Type (Other)
          </label>
          <input
            type="text"
            id="organizationTypeOther"
            name="organizationTypeOther"
            value={formData.organizationTypeOther}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="organizationRole">
            Complainant Organization Role
          </label>
          <input
            type="text"
            id="organizationRole"
            name="organizationRole"
            value={formData.organizationRole}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="organizationPhone">
            Complainant Organization Phone Number*
          </label>
          <input
            type="tel"
            id="organizationPhone"
            name="organizationPhone"
            value={formData.organizationPhone}
            onChange={handleInputChange}
            className="form-control"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>

        <hr className="title-divider" />

        <div className="form-group">
          <label htmlFor="title">Complainant Title*</label>
          <select
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="--None--">--None--</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="firstName">Complainant First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="middleInitial">Complainant MI</label>
          <input
            type="text"
            id="middleInitial"
            name="middleInitial"
            value={formData.middleInitial}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Complainant Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressLine1">Complainant Address Line 1*</label>
          <input
            type="text"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="addressLine2">Complainant Address Line 2</label>
          <input
            type="text"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">Complainant City/Town*</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">Complainant State/Territory*</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="--None--">--None--</option>
          </select>
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="zipCode">Complainant Zip Code*</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="form-control"
              placeholder="55555"
            />
          </div>
          <div className="form-col small">
            <label htmlFor="zipExt">Ext.</label>
            <input
              type="text"
              id="zipExt"
              name="zipExt"
              value={formData.zipExt}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Complainant Email Address*</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
            placeholder="example@demo.com"
          />
        </div>

        <div className="form-row">
          <div className="form-col">
            <label htmlFor="contactPhone">
              Complainant Contact Phone Number*
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleInputChange}
              className="form-control"
              placeholder="(xxx) xxx-xxxx"
            />
          </div>
          <div className="form-col small">
            <label htmlFor="contactPhoneExt">Ext.</label>
            <input
              type="text"
              id="contactPhoneExt"
              name="contactPhoneExt"
              value={formData.contactPhoneExt}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="cellPhone">Complainant Cell Phone Number</label>
          <input
            type="tel"
            id="cellPhone"
            name="cellPhone"
            value={formData.cellPhone}
            onChange={handleInputChange}
            className="form-control"
            placeholder="(xxx) xxx-xxxx"
          />
        </div>

        <div className="button-group">
          <Link to="/complaint-type" className="btn btn-secondary">
            &lt;Specify Complaint Type
          </Link>
          <button type="button" className="btn btn-secondary">
            Cancel
          </button>
          <Link to="/fae-details" className="btn btn-primary">
            Filed Against Entity Information&gt;
          </Link>
        </div>
      </form>

      <hr className="title-divider" />
      <div className="policy-links">
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/security">Security Policy</Link>
      </div>
    </div>
  );
};

export default ComplainantDetailsPage;
