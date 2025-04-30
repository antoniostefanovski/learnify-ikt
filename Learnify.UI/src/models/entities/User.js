export class User {
    constructor(
        id,
        name,
        email,
        password,
        phoneNumber,
        address,
        city,
        gender,
        profilePicture = null,
        registrationTime = new Date(),
        role,
        courses = [],
        enrollments = [],
        reviews = []
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.city = city;
        this.gender = gender;
        this.profilePicture = profilePicture;
        this.registrationTime = registrationTime;
        this.role = role;
        this.courses = courses;
        this.enrollments = enrollments;
        this.reviews = reviews;
    }
}
