import { useMemo, useState } from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input, message, Modal, Popconfirm, Select, Space, Table, Tag } from 'antd';
import Dashboard from '../Dashboard';

const initialReportForm = {
    propertyName: '',
    serviceDate: '',
    serviceDescription: '',
    status: 'Submitted',
    documents: [],
    images: []
};

const statusColors = {
    Submitted: 'processing',
    Pending: 'warning',
    Approved: 'success'
};






const ReportManagement = () => {
    const [reports, setReports] = useState([
        {
            id: 1,
            propertyName: 'Maple Residency',
            serviceDate: '2026-04-20',
            serviceDescription: 'Quarterly maintenance and plumbing inspection completed.',
            status: 'Submitted',
            documents: ['service-receipt.pdf'],
            images: ['before.jpg', 'after.jpg']
        }
    ]);
    const [formData, setFormData] = useState(initialReportForm);
    const [editingId, setEditingId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sortedReports = useMemo(
        () => [...reports].sort((a, b) => new Date(b.serviceDate) - new Date(a.serviceDate)),
        [reports]
    );

    const updateField = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleFileChange = (key, files) => {
        const selectedFiles = Array.from(files || []).map(file => file.name);
        updateField(key, selectedFiles);
    };

    const resetForm = () => {
        setFormData(initialReportForm);
        setEditingId(null);
        setIsModalOpen(false);
    };

    const openCreateModal = () => {
        setFormData(initialReportForm);
        setEditingId(null);
        setIsModalOpen(true);
    };

    const handleSubmit = () => {
        if (!formData.propertyName.trim() || !formData.serviceDate || !formData.serviceDescription.trim()) {
            message.warning('Please fill property, service date, and service description.');
            return;
        }

        if (editingId) {
            setReports(prev =>
                prev.map(report =>
                    report.id === editingId
                        ? {
                            ...report,
                            ...formData,
                            propertyName: formData.propertyName.trim(),
                            serviceDescription: formData.serviceDescription.trim()
                        }
                        : report
                )
            );
            message.success('Report updated successfully.');
        } else {
            setReports(prev => [
                ...prev,
                {
                    id: Date.now(),
                    ...formData,
                    propertyName: formData.propertyName.trim(),
                    serviceDescription: formData.serviceDescription.trim()
                }
            ]);
            message.success('Report created successfully.');
        }

        resetForm();
    };

    const handleEdit = (report) => {
        setEditingId(report.id);
        setFormData({
            propertyName: report.propertyName,
            serviceDate: report.serviceDate,
            serviceDescription: report.serviceDescription,
            status: report.status,
            documents: report.documents,
            images: report.images
        });
        setIsModalOpen(true);
    };

    const handleDelete = (reportId) => {
        setReports(prev => prev.filter(report => report.id !== reportId));
        message.success('Report deleted successfully.');

        if (editingId === reportId) {
            resetForm();
        }
    };

    const columns = [
        {
            title: 'Property',
            dataIndex: 'propertyName',
            key: 'propertyName'
        },
        {
            title: 'Service Date',
            dataIndex: 'serviceDate',
            key: 'serviceDate',
            render: (value) => value || '-'
        },
        {
            title: 'Service Description',
            dataIndex: 'serviceDescription',
            key: 'serviceDescription',
            render: (value) => <span>{value || '-'}</span>
        },
        {
            title: 'Documents',
            dataIndex: 'documents',
            key: 'documents',
            render: (documents) =>
                documents.length > 0
                    ? documents.map(file => <Tag key={file}>{file}</Tag>)
                    : '-'
        },
        {
            title: 'Images',
            dataIndex: 'images',
            key: 'images',
            render: (images) =>
                images.length > 0
                    ? images.map(file => <Tag color="blue" key={file}>{file}</Tag>)
                    : '-'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (value) => <Tag color={statusColors[value] || 'default'}>{value || 'N/A'}</Tag>
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="small">
                    <Button
                        type="text"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(record)}
                    />
                    <Popconfirm
                        title="Delete report?"
                        description="This action cannot be undone."
                        okText="Delete"
                        cancelText="Cancel"
                        onConfirm={() => handleDelete(record.id)}
                    >
                        <Button danger type="text" icon={<DeleteOutlined />} />
                    </Popconfirm>
                </Space>
            )
        }
    ];

    return (
        <Dashboard pageTitle="Report Management">
            <div className="wrapper-content row">
                <div className="col-xl-12">
                    <div className="widget-box-2 mb-24">
                        <div className="d-flex justify-content-between align-items-center mb-20">
                            <h5 className="title mb-0"></h5>
                            <Button type="primary" icon={<PlusOutlined />} onClick={openCreateModal}>
                                Create Report
                            </Button>
                        </div>
                        <Table
                            rowKey="id"
                            columns={columns}
                            dataSource={sortedReports}
                            pagination={{ pageSize: 6 }}
                            locale={{ emptyText: 'No reports submitted yet.' }}
                            scroll={{ x: 1100 }}
                        />
                    </div>
                </div>
            </div>

            <Modal
                open={isModalOpen}
                title={editingId ? 'Edit Service Report' : 'Create Service Report'}
                okText={editingId ? 'Update Report' : 'Create Report'}
                cancelText="Cancel"
                onOk={handleSubmit}
                onCancel={resetForm}
                width={780}
                destroyOnClose
            >
                <div className="row" style={{ marginTop: '10px' }}>
                    <div className="col-md-6">
                        <label className="fw-6 d-block mb-8">Property</label>
                        <Input
                            value={formData.propertyName}
                            onChange={(event) => updateField('propertyName', event.target.value)}
                            placeholder="Enter property name"
                        />
                    </div>

                    <div className="col-md-6">
                        <label className="fw-6 d-block mb-8">Service Date</label>
                        <Input
                            type="date"
                            value={formData.serviceDate}
                            onChange={(event) => updateField('serviceDate', event.target.value)}
                        />
                    </div>

                    <div className="col-md-6 mt-12">
                        <label className="fw-6 d-block mb-8">Report Status</label>
                        <Select
                            value={formData.status}
                            style={{ width: '100%' }}
                            onChange={(value) => updateField('status', value)}
                            options={[
                                { value: 'Submitted', label: 'Submitted' },
                                { value: 'Pending', label: 'Pending' },
                                { value: 'Approved', label: 'Approved' }
                            ]}
                        />
                    </div>

                    <div className="col-md-6 mt-12">
                        <label className="fw-6 d-block mb-8">Upload Documents</label>
                        <Input
                            type="file"
                            multiple
                            onChange={(event) => handleFileChange('documents', event.target.files)}
                        />
                        {formData.documents.length > 0 && (
                            <p className="caption-2" style={{ marginTop: '8px' }}>{formData.documents.join(', ')}</p>
                        )}
                    </div>

                    <div className="col-md-6 mt-12">
                        <label className="fw-6 d-block mb-8">Upload Images</label>
                        <Input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(event) => handleFileChange('images', event.target.files)}
                        />
                        {formData.images.length > 0 && (
                            <p className="caption-2" style={{ marginTop: '8px' }}>{formData.images.join(', ')}</p>
                        )}
                    </div>

                    <div className="col-12 mt-12">
                        <label className="fw-6 d-block mb-8">Service Description</label>
                        <Input.TextArea
                            rows={4}
                            value={formData.serviceDescription}
                            onChange={(event) => updateField('serviceDescription', event.target.value)}
                            placeholder="Describe service performed for the property."
                        />
                    </div>
                </div>
            </Modal>
        </Dashboard>
    );
};

export default ReportManagement;
