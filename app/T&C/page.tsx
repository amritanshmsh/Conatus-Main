import React from 'react';

function TermsOfUse() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Synapse Terms of Use (B2B Subscription Model)</h1>
            <p className="text-sm text-gray-500">By ConatusBharat</p>

            <div className="prose lg:prose-xl mb-8">
                <p>
                    {`These Terms of Use ("Terms") govern the access to and use of Synapse, a software platform provided by ConatusBharat ("we," "us," or "our") to schools or educational institutions ("School" or "you") under a subscription model. By accessing or using Synapse, you, on behalf of your School, agree to be bound by these Terms.`}
                </p>
                <br />
                <h2>Subscription Agreement</h2>
                
                <p>
                    <b>1.1 Nature of Agreement:</b> {`This Agreement constitutes a legally binding contract between ConatusBharat and the School for the use of Synapse.`}
                </p>

                <p>
                    <b>1.2 Subscription Term:</b> {`The subscription term and renewal details are outlined in the separate Subscription Agreement executed between ConatusBharat and the School.`}
                </p>
                <p>
                    <b>1.3 Fees and Payment:</b> {`The School agrees to pay the subscription fees as specified in the Subscription Agreement. Payment terms and methods are also outlined in the Subscription Agreement.`}
                </p>
                <br />
                <h2>Use of Synapse</h2>

                <p>
                    <b>2.1 License Grant:</b> {`We grant the School a non-exclusive, non-transferable, limited license to access and use Synapse for educational purposes during the subscription term, subject to these Terms.`}
                </p>
                <p>
                    <b>2.2 Authorized Users:</b> {`The School may authorize its Students and staff members to use Synapse for educational purposes.`}
                </p>
                <p>
                    <b>2.3 Permitted Use:</b> {`Synapse may be used only for its intended educational purposes and in accordance with these Terms.`}
                </p>
                <p>
                    <b>2.4 Prohibited Use:</b> {`Synapse may not be used for any commercial, illegal, or unauthorized purpose. The School may not modify, adapt, translate, reverse engineer, decompile, or disassemble any portion of Synapse.`}
                </p>
                <br />
                <h2>User-Generated Content</h2>
                
                <p>
                    <b>3.1 Student Content:</b> {`Students may submit content to Synapse (e.g., comments, feedback). The School is responsible for obtaining any necessary consents from parents or legal guardians of Students under 18 years of age before allowing them to submit content.`}
                </p>
                <p>
                    <b>3.2 License Grant:</b> {`The School grants us a non-exclusive, royalty-free, worldwide, perpetual license to use, modify, reproduce, distribute, and display Student content in connection with Synapse and our business.`}
                </p>
                <p>
                    <b>3.3 Responsibility:</b> {`The School is responsible for the content submitted by its Students and ensuring that it is legal, reliable, and appropriate.`}
                </p>
                <br />
                <h2>Progress Reports and Data Collection</h2>
                
                <p>
                    <b>4.1 Progress Reports:</b> {`Synapse generates progress reports for Students and their parents/guardians. We strive to ensure the accuracy of these reports, but we do not guarantee their completeness or accuracy.`}
                </p>
                <p>
                    <b>4.2 Data Collection and Privacy:</b> {`We collect information about the use of Synapse to improve the platform and personalize learning experiences. Our data collection and use practices are described in our Privacy Policy, which the School must review and ensure compliance with.`}
                </p>
                <br />
                <h2>Intellectual Property</h2>
                
                <p>
                    {`Synapse and its content, including but not limited to text, graphics, images, and software, are protected by intellectual property laws. The School and its authorized users may not use any of our intellectual property without our prior written consent.`}
                </p>
                <br />
                <h2>Termination</h2>
                
                <p>
                    <b>6.1 By School:</b> {`The School may terminate this Agreement at any time by providing written notice to us in accordance with the terms of the Subscription Agreement.`}
                </p>
                <p>
                    <b>6.2 By ConatusBharat:</b> {`We may terminate this Agreement for any material breach of these Terms by the School, subject to providing the School with notice and an opportunity to cure the breach.`}
                </p>
                <br />
                <h2>Disclaimer of Warranties</h2>
                
                <p>
                    {`Synapse is provided "as is" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.`}
                </p>
                <br />
                <h2>Limitation of Liability</h2>
                
                <p>
                    {`To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of Synapse.`}
                </p>
                <br />
                <h2>Governing Law</h2>
                
                <p>
                    {`These Terms shall be governed by and construed in accordance with the laws of India.`}
                </p>
                <br />
                <h2>Changes to These Terms</h2>
                
                <p>
                    {`We may update these Terms from time to time. We will notify you of any material changes by posting the updated Terms on Synapse.`}
                </p>
                <br />
                <h2>Contact Us</h2>
                
                <p>
                    {`If you have any questions about these Terms, please contact us at: `} <br />
                    <b>ConatusBharat</b> <br />
                    {`Email: conatusbharat@gmail.com`}
                </p>

                <p className="text-sm">
                    {`By using Synapse, you, on behalf of the School, acknowledge that you have read, understood, and agreed to these Terms and the accompanying Subscription Agreement.`}
                </p>
            </div>
        </div>
    );
}

export default TermsOfUse;
