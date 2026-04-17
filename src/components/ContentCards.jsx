import {
    HiOutlineWrenchScrewdriver,
    HiOutlineHome,
    HiOutlineDocumentMagnifyingGlass
} from "react-icons/hi2";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const ContentCards = () => {
    const cardData = [
        {
            title: "Service Providers",
            description: "Easily log, manage, and digitize service records for every property you work on.",
            icon: <HiOutlineWrenchScrewdriver />,
            iconBg: "#e3f2fd",
            iconColor: "#0d6efd",
            points: [
                "Upload service records and invoices",
                "Use digital templates and smart forms",
                "Manage all jobs from a single dashboard",
                "Automatically generate reports"
            ]
        },
        {
            title: "Homeowners",
            description: "Maintain a complete and secure history of your property’s services and maintenance.",
            icon: <HiOutlineHome />,
            iconBg: "#f0fdf4",
            iconColor: "#198754",
            points: [
                "Claim and manage your property",
                "View full service history",
                "Verify or upload records",
                "Control access and sharing permissions"
            ]
        },
        {
            title: "Buyers & Agents",
            description: "Access verified property insights to make informed decisions with confidence.",
            icon: <HiOutlineDocumentMagnifyingGlass />,
            iconBg: "#fff7ed",
            iconColor: "#f59e0b",
            points: [
                "Search properties by address",
                "Preview service history",
                "Unlock detailed reports",
                "Download professional reports"
            ]
        }
    ];

    return (
        <>
            <style>
                {`
                .who-its-for-main {
                    margin-bottom: 150px;
                }
                .custom-card {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 32px;
                    height: 100%; /* Ensures all cards have same height */
                    border: 1px solid #f0f0f0;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                    transition: all 0.3s ease-in-out;
                }
                .custom-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
                    border-color: #0d6efd40;
                }
                .icon-box {
                    width: 56px;
                    height: 56px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 26px;
                    margin-bottom: 24px;
                }
                .card-title {
                    font-weight: 700;
                    font-size: 1.35rem;
                    margin-bottom: 12px;
                    color: #212529;
                }
                .card-desc {
                    color: #6c757d;
                    font-size: 0.95rem;
                    line-height: 1.6;
                    margin-bottom: 25px;
                    min-height: 60px; /* Aligns text across cards */
                }
                .points-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }
                .point-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    font-size: 0.9rem;
                    color: #495057;
                    margin-bottom: 14px;
                }
                .point-icon {
                    color: #0d6efd;
                    font-size: 1.2rem;
                    flex-shrink: 0;
                }
                `}
            </style>

            <section className="who-its-for-main">
                <div className="container">
                    <div className="row g-4" data-stagger>
                        {cardData.map((item, index) => (
                            <div className="col-md-4" key={index}>
                                <div className="custom-card">
                                    <div className="icon-box" style={{ backgroundColor: item.iconBg, color: item.iconColor }}>
                                        {item.icon}
                                    </div>
                                    <h4 className="card-title">{item.title}</h4>
                                    <p className="card-desc">{item.description}</p>

                                    <ul className="points-list">
                                        {item.points.map((point, i) => (
                                            <li key={i} className="point-item">
                                                <IoCheckmarkCircleOutline className="point-icon" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContentCards;