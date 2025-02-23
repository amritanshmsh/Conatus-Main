import React from 'react';

function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

            <p className="text-sm text-gray-500">Effective Date: June 21, 2024</p>

            <div className="prose lg:prose-xl mb-8"> 
                <p>
                    {`Conatus Bharat ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By using our services, you agree to the collection and use of information in accordance with this policy.`}
                </p>
                <br />
                <h2>Information We Collect</h2>
                <p>
                    <b>Personal Information:</b> We may collect personally identifiable information, such as your name, email address, phone number, and any other information you provide during registration or assessment.
                </p>
                <p>
                    <b>Usage Data:</b> We collect information automatically about your interaction with our website and services, including IP address, browser type, operating system, referring URLs, and pages viewed.
                </p>
                <p>
                    <b>Assessment Data:</b> We collect information related to the assessments you take, including responses, scores, and any feedback provided.
                </p>
                <br />
                <h2>How We Use Your Information</h2>
                <p>
                    <b>To Provide and Improve Services:</b> We use your information to provide, maintain, and improve our services, including processing your assessments and providing feedback.
                </p>
                <p>
                    <b>Communication:</b> We may use your personal information to contact you with newsletters, marketing or promotional materials, and other information that may be of interest to you.
                </p>
                <p>
                    <b>Analytics:</b> We may use the information to analyze usage trends and improve the user experience on our platform.
                </p>
                <p>
                    <b>Compliance and Protection:</b> We may use your information to comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <br />
                <h2>Sharing Your Information</h2>
                <p>
                    <b>Service Providers:</b> We may share your information with third-party service providers who perform services on our behalf, such as data analysis and email delivery.
                </p>
                <p>
                    <b>Legal Requirements:</b> We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                </p>
                <p>
                    <b>Business Transfers:</b> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                </p>
                <br />
                <h2>Data Security</h2>
                <p>
                    We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee its absolute security.
                </p>
                <br />
                <h2>Your Rights</h2>
                <p>
                    You have the right to access, update, and delete your personal information. You can also object to or restrict the processing of your data. To exercise these rights, please contact us at the email address provided below.
                </p>
                <br />
                <h2>Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
                <br />
                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at: <br />
                    <b>Conatus Bharat</b> <br />
                    Email: conatusbharat@gmail.com
                </p>
            </div>

            <p className="text-sm">
                By using our website or services, you consent to the terms of this Privacy Policy.
            </p>
        </div>
    );
}

export default PrivacyPolicy;
