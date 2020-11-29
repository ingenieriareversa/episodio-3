module.exports = {
    get({ measurementType }) {
        return {
            temperature: measurementType === "celsius" ? 25 : 78
        }
    }
}