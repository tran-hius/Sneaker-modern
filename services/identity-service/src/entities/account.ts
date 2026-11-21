export type AccountStatus = "active" | "locked" | "deleted";
export type OtpPurpose = "verify_account" | "reset_password";
export enum Gender {
  FEMALE = "female",
  MALE = "male",
  OTHER = "other",
}

export class Account {
  constructor(
    public id: number,
    public roleId: number,
    public username: string,
    public email: string,
    public passwordHash: string,
    public status: AccountStatus,
    public isVerify: boolean,
    public lastLoginAt: Date | null,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}
}

export class Role {
  constructor(
    public id: number,
    public name: string,
  ) {}
}

export class RefreshToken {
  constructor(
    public id: number,
    public accountId: number,
    public tokenHash: string,
    public expiresAt: Date,
    public createdAt: Date,
    public revokedAt: Date | null = null,
  ) {}
}

export class OtpCode {
  constructor(
    public id: number,
    public accountId: number,
    public codeHash: string,
    public purpose: OtpPurpose,
    public attempts: number,
    public expiresAt: Date,
    public createdAt: Date,
  ) {}
}

export class UserProfile {
  constructor(
    public accountId: number,
    public fullName: string,
    public createdAt: Date,
    public updatedAt: Date,
    public gender: Gender | null = null,
    public avatarUrl: string | null = null,
    public dateOfBirth: Date | null = null,
    public address: string | null = null,
    public bio: string | null = null,
  ) {}
}
