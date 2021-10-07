const experienceData = [
    {
        id: 1,
        employer: "Verily Life Science",
        url: "https://verily.com/",
        jobTitle: "Software Engineer Intern",
        timeFrame: "June 2021 - September 2021",
        description: [
            "During the last summer, I joined Verily as a Software Engineering Intern. I was a member of the device team that worked on the development of <a href=\"https://www.blog.google/technology/health/new-milestones-helping-prevent-eye-disease-verily/\">retinal imaging camera</a>.",
            "The first part of my internship involved developing a classifier for the output of the ML/AI model. This goal was to let the patients know right away whether their capture was 'good' enough, thus possibly save them another trip to the clinic.",
            "For the second part, I designed and implemented a central database / communication hub for the whole system. The server will take charge of storing data, coordinate communication between services, and erasing data after a certain period of time to comply with HIPPA guidance.",
            "Both projects were developed in C++ and built using Google's internal and open-source's Bazel build system. The server in the second project utilized gRPC framework (HTTP2).",
        ]
    },
    {
        id: 2,
        employer: "Pair Anything",
        url: "https://www.pairanything.com/",
        jobTitle: "Software Data Engineer Intern",
        timeFrame: "September 2020 - December 2020",
        description: [
            "This is my first internship as a Software Engineering student. I joined Pair Anything and worked on developing mobile and web aplication for wineries in Northern California. The job introduced me to new technologies and industry's standard practice, such as React, Gitlab, Jira, and the Agile environment.",
        ]
    },
    {
        id: 3,
        url: "https://medpdgroup.com/home",
        employer: "Briganti Product Development Group",
        jobTitle: "Software Data Engineer Intern",
        timeFrame: "October 2014 - June 2019",
        description: [
            "My first full-time job as a Mechanical Engineer. Briganti Product Development Group is a consultant firm specializing in medical device. I had the opportunities to work with clients from different backgrounds and learn about their perspective.",
            "Most interestingly, I had a chance to work directly with suppliers from China. The experience helped me understand more about China's competitive strength in the manufacturing industry.",
            "Noteable achievement includes one patent for a <a href=\"https://patents.google.com/patent/US9936991B2/\">device to fix bone fracture</a>, and one for a <a href=\"https://patents.google.com/patent/US20200121130A1/\">cocktail shaker</a>."
        ]
    }
]

export default experienceData