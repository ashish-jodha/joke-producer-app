export const getJoke = async () => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?safe-mode');
        const data = await response.json();

        if (data.type === 'single') {
            return data.joke;
        } else {
            return `${data.setup}\n... ${data.delivery}`;
        }

    } catch (error) {
        console.error("Error fetching joke:", error);
        return "Failed to fetch a joke. Please try again.";
    }
};