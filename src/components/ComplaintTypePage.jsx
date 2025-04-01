import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ComplaintTypePage.css';

const ComplaintTypePage = () => {
  const [selectedType, setSelectedType] = useState('');

  const complaintTypes = [
    {
      id: 'transactions',
      title: 'Transactions',
      description:
        'Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.',
    },
    {
      id: 'codeSets',
      title: 'Code Sets',
      description:
        'Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.',
    },
    {
      id: 'uniqueIdentifiers',
      title: 'Unique Identifiers',
      description:
        'Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).',
    },
    {
      id: 'operatingRules',
      title: 'Operating Rules',
      description:
        'Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.',
    },
  ];

  const progressSteps = [
    'Complaint Type',
    'Complainant Details',
    'FAE Details',
    'Complaint Details',
    'Review Complaint',
    'Submitted',
  ];

  return (
    <div className="complaint-page">
      <div className="progress-bar">
        {progressSteps.map((step, index) => (
          <div
            key={step}
            className={`progress-step ${index === 0 ? 'active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>

      <h2 className="page-title">Complaint Type</h2>
      <h3 className="page-subtitle">Make a selection below</h3>

      <div className="complaint-options">
        {complaintTypes.map((type) => (
          <div key={type.id} className="complaint-option">
            <label className="option-label">
              <input
                type="radio"
                name="complaintType"
                value={type.id}
                checked={selectedType === type.id}
                onChange={(e) => setSelectedType(e.target.value)}
              />
              <div className="option-content">
                <span className="option-title">{type.title}</span>
                <p className="option-description">{type.description}</p>
              </div>
            </label>
          </div>
        ))}
      </div>

      <div className="button-group">
        <Link to="/" className="btn btn-secondary">
          &lt;Welcome
        </Link>
        <button type="button" className="btn btn-secondary">
          Cancel
        </button>
        <Link
          to="/complainant-details"
          className={`btn btn-secondary ${!selectedType ? 'disabled' : ''}`}
          onClick={(e) => !selectedType && e.preventDefault()}
        >
          Complainant Information&gt;
        </Link>
      </div>

      <hr className="title-divider" />
      <div className="policy-links">
        <Link to="/">Home</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/security">Security Policy</Link>
      </div>
    </div>
  );
};

export default ComplaintTypePage;
