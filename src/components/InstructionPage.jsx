import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/InstructionPage.css';
import Footer from './Footer';

const InstructionPage = () => {
  return (
    <>
      <div className="instruction-page">
        <h1 className="instruction-title">
          Administrative Simplification Enforcement and Testing Tool (ASETT)
        </h1>

        <div className="disclaimer-box">
          <h3 className="disclaimer-title">Disclaimer</h3>
          <p className="disclaimer-text">
            If you file a complaint without registration, you will not be able
            to view your complaints, upload supporting documents, correspond
            electronically, or test transactions.
          </p>
        </div>

        <div className="instruction-content">
          <p className="instruction-text">
            The following is the list of steps you will take in order to file a
            complaint regarding HIPAA Transactions and Code Sets, Unique
            Identifiers, and/or Operating Rules. If you wish to file a Health
            Insurance Privacy complaint, please visit the{' '}
            <a
              href="https://www.hhs.gov/ocr"
              target="_blank"
              rel="noopener noreferrer"
              className="instruction-link"
            >
              Office for Civil Rights (OCR)
            </a>{' '}
            website.
          </p>

          <ul className="steps-list">
            <li>
              <span className="step-text">
                Identify the type of HIPAA/ACA complaint
              </span>
            </li>
            <li>
              <span className="step-text">
                Provide your contact information
              </span>
            </li>
            <li>
              <span className="step-text">
                Identify the Filed Against Entity
              </span>
            </li>
            <li>
              <span className="step-text">
                Describe the HIPAA/ACA violation
              </span>
            </li>
            <li>
              <span className="step-text">Review and Submit</span>
            </li>
          </ul>

          <p className="instruction-text">
            You can review all information entered before submitting your
            complaint to CMS. Once the complaint is submitted, CMS will review
            all information and respond to your complaint.
          </p>
        </div>

        <div className="button-group">
          <Link to="/" className="btn btn-secondary">
            Cancel
          </Link>
          <Link to="/complaint-type" className="btn btn-secondary">
            Complaint Type
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InstructionPage;
