const StoryData = {
    "act1": {
        id: "act1",
        title: "The Urban Decay",
        description: "While urban schools are assumed to have better infrastructure, the data reveals a severe maintenance crisis compared to rural stability.",
        quote: [
            {text: "One student mentioned that doors were missing for washrooms in their school"},
            {text: "A large number of students complained about the poor quality of washrooms"}
        ],
        stats: {
            urban: {
                label: "Urban Schools",
                separateToilets: 78.1,
                cleanToilets: 53.1,
                runningWater: 59.4
            },
            rural: {
                label: "Rural Schools",
                separateToilets: 100,
                cleanToilets: 89.3,
                runningWater: 92.9
            }
        }
    },
    "act2": {
        id: "act2",
        title: "The Pedagogy Paradox",
        description: "The data shatters the myth that urban schools offer better learning environments through technology. Digital adoption is uniformly poor across the board, but rural schools compensate with veteran educators. Urban students, meanwhile, face a revolving door of inexperienced staff.",
        quote: [
            {text: "A lot of students said that they liked their teachers when asked about one thing they like about their school"}
        ],
        stats: {
            urban: {
                label: "Urban Teachers",
                experience: 4, //Avg years of experience
                techNeverUsed: 50, // % who 'Never' use digital tools
            },
            rural: {
                label: "Rural Teachers",
                experience: 14.5, 
                techNeverUsed: 40
            }
        }
    }
}

export default StoryData