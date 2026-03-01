const StoryData = {
    "act1": {
        id: "act1",
        title: "The Infrastructure Paradox",
        description: "The assumption that urban proximity guarantees a superior learning environment is flawed. While urban schools possess the hardware—laboratories and electricity—they buckle under overcrowding and poor maintenance. Conversely, rural schools manage their limited basic sanitation exceptionally well, but suffer from a severe scarcity of classrooms and scientific facilities.",
        quote: [
            {text: "Only 27.3% of urban school toilets are consistently clean, a failure of maintenance driven by severe overcrowding."},
            {text: "Rural schools demonstrate high compliance in basic sanitation but face acute shortages of classroom space, forcing multi-grade teaching arrangements."}
        ],
        stats: {
            urban: {
                label: "Urban Schools",
                separateToilets: 78.8, // From Table 3
                cleanToilets: 27.3, // From Table 3
                runningWater: 30.3 // From Table 3
            },
            rural: {
                label: "Rural Schools",
                separateToilets: 100, // From Table 3
                cleanToilets: 78.0, // From Table 3
                runningWater: 90.2 // From Table 3
            }
        }
    },
    "act2": {
        id: "act2",
        title: "The Administrative Burden",
        description: "The urban teaching advantage is largely a mirage. Despite having better digital resources, urban educators are crushed by non-academic duties—election work, census data, and bureaucratic reporting—drastically reducing instructional time. Meanwhile, rural schools suffer from acute staff shortages, forcing veteran educators to juggle multiple subjects outside their expertise.",
        quote: [
            {text: "Urban teachers face an 'administrative overload' that directly crowds out lesson planning and personalised pedagogical engagement."},
            {text: "With a 10-year average experience advantage, rural teachers leverage strong community relationships to offset the lack of digital learning tools."}
        ],
        stats: {
            urban: {
                label: "Urban Teachers",
                experience: 3.3, // From Table 6
                techNeverUsed: 40, // From Table 5
            },
            rural: {
                label: "Rural Teachers",
                experience: 10.3, // From Table 6
                techNeverUsed: 40 // From Table 5
            }
        }
    }, 
    "act3": {
        id: "act3",
        title: "The Attrition Divide",
        description: "Dropout drivers reveal a stark geographic and gendered divide. In rural areas, severe economic hardship and domestic labour obligations systematically strip adolescent girls from the education system post-Class 8. In contrast, urban attrition is not driven primarily by poverty, but by a lack of parental support and sheer apathy toward the curriculum.",
        quote: [
            {text: "18.2% of urban dropouts stem purely from a 'lack of interest'—an indictment of an overcrowded, unengaging system."},
            {text: "For rural female students, the intersection of poverty and domestic expectations creates insurmountable barriers to secondary education."}
        ],
        stats: {
            urban: {
                label: "Urban Schools",
                higherEd: 33.3, // From Table 7 (Above 80% bracket)
                dropoutEconomic: 9.1, // From Table 10
                dropoutApathy: 18.2 // From Table 10
            },
            rural: {
                label: "Rural Schools",
                higherEd: 33.3, // From Table 7 (Above 80% bracket)
                dropoutEconomic: 36.0, // From Table 10
                dropoutApathy: 12.0 // From Table 10
            }
        }
    }
}

export default StoryData