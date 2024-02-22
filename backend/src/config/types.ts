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

    //Model EntitiesRole
    EntitiesRoleRepositoryInterface: Symbol.for("EntitiesRoleRepositoryInterface"),
    EntitiesRoleServiceInterface: Symbol.for("EntitiesRoleServiceInterface"),
    EntitiesRoleService: Symbol.for("EntitiesRoleService"),
    EntitiesRoleRepository: Symbol.for("EntitiesRoleRepository"),
    EntitiesRole: Symbol.for("EntitiesRole"),

    //Model Role
    RoleRepositoryInterface: Symbol.for("RoleRepositoryInterface"),
    RoleServiceInterface: Symbol.for("RoleServiceInterface"),
    RoleService: Symbol.for("RoleService"),
    RoleRepository: Symbol.for("RoleRepository"),
    Role: Symbol.for("Role"),

    RegisterController: Symbol("RegisterController"),

    //Module Verification
    Verification: Symbol.for("Verification"),
};

export { TYPES };