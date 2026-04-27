import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Input, Button, Typography, Card, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { TextArea } = Input;

const ServiceProfessionals = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Service Professional Data:", values);
    };

    return (
        <>
            <Header />
            <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <Card bordered={false} style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.1)", backgroundColor: "#f3f7fd" }}>
                            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                                <Title level={2} style={{ fontFamily: "Manrope, sans-serif", marginBottom: "8px" }}>
                                    Service Professional Sign Up
                                </Title>
                                <Text style={{ fontFamily: "Manrope, sans-serif", color: "#666", fontSize: "16px" }}>
                                    Partner with us to grow your local service business.
                                </Text>
                            </div>

                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                style={{ fontFamily: "Manrope, sans-serif" }}
                            >
                                {/* Company Name */}
                                <Form.Item
                                    name="companyName"
                                    label="Company Name"
                                    rules={[{ required: true, message: 'Please enter your company name' }]}
                                >
                                    <Input placeholder="Reliable Services Inc." size="large" />
                                </Form.Item>

                                {/* Address */}
                                <Form.Item
                                    name="address"
                                    label="Business Address"
                                    rules={[{ required: true, message: 'Please enter your business address' }]}
                                >
                                    <Input placeholder="123 Business St, Suite 100, City, State" size="large" />
                                </Form.Item>

                                <div className="row">
                                    {/* Phone Number */}
                                    <div className="col-md-6">
                                        <Form.Item
                                            name="phone"
                                            label="Phone Number"
                                            rules={[{ required: true, message: 'Phone number is required' }]}
                                        >
                                            <Input placeholder="(555) 000-0000" size="large" />
                                        </Form.Item>
                                    </div>
                                    {/* Email */}
                                    <div className="col-md-6">
                                        <Form.Item
                                            name="email"
                                            label="Email Address"
                                            rules={[{ type: 'email', required: true, message: 'Valid email is required' }]}
                                        >
                                            <Input placeholder="info@company.com" size="large" />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Website */}
                                    <div className="col-md-6">
                                        <Form.Item name="website" label="Website (Optional)">
                                            <Input placeholder="https://www.yourbusiness.com" size="large" />
                                        </Form.Item>
                                    </div>
                                    {/* Logo Upload */}
                                    <div className="col-md-6">
                                        <Form.Item
                                            name="logo"
                                            label="Company Logo"
                                            valuePropName="fileList"
                                            getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}
                                        >
                                            <Upload name="logo" listType="picture" maxCount={1} beforeUpload={() => false}>
                                                <Button icon={<UploadOutlined />} size="large" style={{ width: '100%' }}>Click to Upload</Button>
                                            </Upload>
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* Licensing Agency */}
                                    <div className="col-md-4">
                                        <Form.Item
                                            name="licensingAgency"
                                            label="Licensing Agency"
                                            rules={[{ required: true, message: 'Agency required' }]}
                                        >
                                            <Input placeholder="e.g. State Board" size="large" />
                                        </Form.Item>
                                    </div>
                                    {/* License # */}
                                    <div className="col-md-4">
                                        <Form.Item
                                            name="licenseNumber"
                                            label="License #"
                                            rules={[{ required: true, message: 'License # required' }]}
                                        >
                                            <Input placeholder="LIC-998877" size="large" />
                                        </Form.Item>
                                    </div>
                                    {/* Years in Business */}
                                    <div className="col-md-4">
                                        <Form.Item
                                            name="yearsInBusiness"
                                            label="Years in Business"
                                            rules={[{ required: true, message: 'Required' }]}
                                        >
                                            <Input type="number" placeholder="5" size="large" />
                                        </Form.Item>
                                    </div>
                                </div>

                                {/* Description */}
                                <Form.Item
                                    name="description"
                                    label="Description of Business & Services"
                                    rules={[{ required: true, message: 'Please provide a brief description' }]}
                                >
                                    <TextArea
                                        rows={4}
                                        placeholder="Tell homeowners about the services you provide, specialties, and service areas..."
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        block
                                        style={{
                                            backgroundColor: '#1562df',
                                            borderColor: '#1562df',
                                            fontFamily: "Manrope, sans-serif",
                                            marginTop: '10px'
                                        }}
                                    >
                                        Create Professional Profile
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ServiceProfessionals;