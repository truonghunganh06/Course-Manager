import React from 'react';

const RoadmapPage = () => {
    const roadmaps = [
        { title: 'Frontend Development', description: 'Learn HTML, CSS, JavaScript, and React to become a frontend developer.' },
        { title: 'Backend Development', description: 'Master Node.js, Express, and databases to build server-side applications.' },
        { title: 'Fullstack Development', description: 'Combine frontend and backend skills to become a fullstack developer.' },
    ];

    return (
        <div>
            <h1>Lộ trình học</h1>
            <p>Chọn lộ trình phù hợp để bắt đầu hành trình học tập của bạn.</p>
            <div>
                {roadmaps.map((roadmap, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h2>{roadmap.title}</h2>
                        <p>{roadmap.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoadmapPage;
