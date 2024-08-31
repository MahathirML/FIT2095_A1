/**
 * Represents a package with details for shipping and allocation.
 */
class Package {
    /**
     * Creates an instance of the Package class.
     * @param {string} package_title - The title of the package.
     * @param {number} package_weight - The weight of the package in kilograms.
     * @param {string} package_destination - The destination address for the package.
     * @param {string} description - A description of the package.
     * @param {boolean} isAllocated - Indicates if the package is allocated to a driver.
     * @param {string} driver_id - The ID of the driver assigned to the package (if allocated).
     */
    constructor(package_title, package_weight, package_destination, description, isAllocated, driver_id) {
        /**
         * Unique identifier for the package.
         * @type {string}
         */
        this.package_id = this.generatePackageId();

        /**
         * The title of the package.
         * @type {string}
         */
        this.package_title = package_title;

        /**
         * The weight of the package in kilograms.
         * @type {number}
         */
        this.package_weight = package_weight;

        /**
         * The destination address for the package.
         * @type {string}
         */
        this.package_destination = package_destination;

        /**
         * A description of the package.
         * @type {string}
         */
        this.description = description;

        /**
         * The date and time when the package record was created.
         * @type {Date}
         */
        this.createdAt = new Date();

        /**
         * Indicates if the package is allocated to a driver.
         * @type {boolean}
         */
        this.isAllocated = isAllocated;

        /**
         * The ID of the driver assigned to the package (if allocated).
         * @type {string}
         */
        this.driver_id = driver_id;
    }

    /**
     * Generates a unique package ID.
     * @returns {string} The generated package ID.
     */
    generatePackageId() {
        // Two random uppercase characters
        const randomChars = String.fromCharCode(
            65 + Math.floor(Math.random() * 26),
            65 + Math.floor(Math.random() * 26)
        ); 
        const initials = "ML";
        // Three random digits
        const randomDigits = Math.floor(100 + Math.random() * 900); 

        return `P${randomChars}-${initials}-${randomDigits}`;
    }
}

module.exports = Package;
