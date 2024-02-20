const TYPES = {
    //Model UserProfile
    UserRepositoryInterface: Symbol.for("UserProfileRepositoryInterface"),
    UserServiceInterface: Symbol.for("UserProfileServiceInterface"),
    UserService: Symbol.for("UserProfileService"),
    UserRepository: Symbol.for("UserProfileRepository"),
    UserProfile: Symbol.for("UserProfile"),

    //Model Credential
    CredentialRepositoryInterface: Symbol.for("CredentialRepositoryInterface"),
    CredentialServiceInterface: Symbol.for("CredentialServiceInterface"),
    CredentialService: Symbol.for("CredentialService"),
    CredentialRepository: Symbol.for("CredentialRepository"),
    Credential: Symbol.for("Credential"),

    //Model UserEntities
    UserEntitiesRepositoryInterface: Symbol.for("UserEntitiesRepositoryInterface"),
    UserEntitiesServiceInterface: Symbol.for("UserEntitiesServiceInterface"),
    UserEntitiesService: Symbol.for("UserEntitiesService"),
    UserEntitiesRepository: Symbol.for("UserEntitiesRepository"),
    UserEntities: Symbol.for("UserEntities"),

    RegisterController: Symbol("RegisterController"),

    //Module Verification
    Verification: Symbol.for("Verification"),
};

export { TYPES };