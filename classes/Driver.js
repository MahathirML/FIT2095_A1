/**
 * Represents a driver with personal and vehicle details.
 */
class Driver {
    /**
     * Creates an instance of the Driver class.
     * @param {string} driver_name - The name of the driver.
     * @param {string} driver_department - The department the driver is associated with.
     * @param {string} driver_licence - The license plate of the driver’s vehicle.
     * @param {boolean} driver_isActive - Indicates if the driver is currently active.
     */
    constructor(driver_name, driver_department, driver_licence, driver_isActive) {
        /**
         * Unique identifier for the driver.
         * @type {string}
         */
        this.driver_id = this.generateDriverId();

        /**
         * The name of the driver.
         * @type {string}
         */
        this.driver_name = driver_name;

        /**
         * The department the driver is associated with.
         * @type {string}
         */
        this.driver_department = driver_department;

        /**
         * The license plate of the driver’s vehicle.
         * @type {string}
         */
        this.driver_licence = driver_licence;

        /**
         * Indicates if the driver is currently active.
         * @type {boolean}
         */
        this.driver_isActive = driver_isActive;

        /**
         * The date and time when the driver record was created.
         * @type {Date}
         */
        this.driver_createdAt = new Date();
    }

    /**
     * Generates a unique driver ID.
     * @returns {string} The generated driver ID.
     */
    generateDriverId() {
        // Two random digits
        const randomDigits = Math.floor(Math.random() * 90) + 10; 

        const firstTwoIdDigits = "33"; 
        
        // Three random uppercase letters
        const randomLetters = String.fromCharCode(
            65 + Math.floor(Math.random() * 26),
            65 + Math.floor(Math.random() * 26),
            65 + Math.floor(Math.random() * 26)
        ); 

        return `D${randomDigits}-${firstTwoIdDigits}-${randomLetters}`;
    }
}

module.exports = Driver;
