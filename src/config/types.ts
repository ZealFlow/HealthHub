const TYPES = {
    UserRepositoryInterface: Symbol.for("UserProfileRepositoryInterface"),
    UserServiceInterface: Symbol.for("UserProfileServiceInterface"),
    UserService: Symbol.for("UserProfileService"),
    UserRepository: Symbol.for("UserProfileRepository"),
    UserProfile: Symbol.for("UserProfile"),

    CredentialRepositoryInterface: Symbol.for("CredentialRepositoryInterface"),
    CredentialServiceInterface: Symbol.for("CredentialServiceInterface"),
    CredentialService: Symbol.for("CredentialService"),
    CredentialRepository: Symbol.for("CredentialRepository"),
    Credential: Symbol.for("Credential"),
};

export { TYPES };