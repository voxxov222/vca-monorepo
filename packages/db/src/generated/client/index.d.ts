
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model CardSet
 * 
 */
export type CardSet = $Result.DefaultSelection<Prisma.$CardSetPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model GradingReport
 * 
 */
export type GradingReport = $Result.DefaultSelection<Prisma.$GradingReportPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model Slab
 * 
 */
export type Slab = $Result.DefaultSelection<Prisma.$SlabPayload>
/**
 * Model NFCRecord
 * 
 */
export type NFCRecord = $Result.DefaultSelection<Prisma.$NFCRecordPayload>
/**
 * Model QRRecord
 * 
 */
export type QRRecord = $Result.DefaultSelection<Prisma.$QRRecordPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  DISABLED: 'DISABLED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const UserRole: {
  CUSTOMER: 'CUSTOMER',
  GRADER: 'GRADER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const CertificateStatus: {
  PENDING: 'PENDING',
  IN_REVIEW: 'IN_REVIEW',
  CERTIFIED: 'CERTIFIED',
  VERIFIED: 'VERIFIED',
  SUSPENDED: 'SUSPENDED',
  REVOKED: 'REVOKED'
};

export type CertificateStatus = (typeof CertificateStatus)[keyof typeof CertificateStatus]


export const SubmissionStatus: {
  DRAFT: 'DRAFT',
  RECEIVED: 'RECEIVED',
  IN_REVIEW: 'IN_REVIEW',
  GRADING: 'GRADING',
  AWAITING_APPROVAL: 'AWAITING_APPROVAL',
  CERTIFIED: 'CERTIFIED',
  RETURNED: 'RETURNED',
  CANCELLED: 'CANCELLED'
};

export type SubmissionStatus = (typeof SubmissionStatus)[keyof typeof SubmissionStatus]


export const SlabStatus: {
  ASSEMBLY: 'ASSEMBLY',
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  RETIRED: 'RETIRED'
};

export type SlabStatus = (typeof SlabStatus)[keyof typeof SlabStatus]


export const VerificationSecurityLevel: {
  IDENTIFIER_ONLY: 'IDENTIFIER_ONLY',
  CRYPTOGRAPHIC: 'CRYPTOGRAPHIC'
};

export type VerificationSecurityLevel = (typeof VerificationSecurityLevel)[keyof typeof VerificationSecurityLevel]


export const TamperStatus: {
  UNKNOWN: 'UNKNOWN',
  CLEAR: 'CLEAR',
  SUSPECTED: 'SUSPECTED',
  TAMPERED: 'TAMPERED'
};

export type TamperStatus = (typeof TamperStatus)[keyof typeof TamperStatus]

}

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type CertificateStatus = $Enums.CertificateStatus

export const CertificateStatus: typeof $Enums.CertificateStatus

export type SubmissionStatus = $Enums.SubmissionStatus

export const SubmissionStatus: typeof $Enums.SubmissionStatus

export type SlabStatus = $Enums.SlabStatus

export const SlabStatus: typeof $Enums.SlabStatus

export type VerificationSecurityLevel = $Enums.VerificationSecurityLevel

export const VerificationSecurityLevel: typeof $Enums.VerificationSecurityLevel

export type TamperStatus = $Enums.TamperStatus

export const TamperStatus: typeof $Enums.TamperStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cardSet`: Exposes CRUD operations for the **CardSet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CardSets
    * const cardSets = await prisma.cardSet.findMany()
    * ```
    */
  get cardSet(): Prisma.CardSetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gradingReport`: Exposes CRUD operations for the **GradingReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GradingReports
    * const gradingReports = await prisma.gradingReport.findMany()
    * ```
    */
  get gradingReport(): Prisma.GradingReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slab`: Exposes CRUD operations for the **Slab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slabs
    * const slabs = await prisma.slab.findMany()
    * ```
    */
  get slab(): Prisma.SlabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nFCRecord`: Exposes CRUD operations for the **NFCRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NFCRecords
    * const nFCRecords = await prisma.nFCRecord.findMany()
    * ```
    */
  get nFCRecord(): Prisma.NFCRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qRRecord`: Exposes CRUD operations for the **QRRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QRRecords
    * const qRRecords = await prisma.qRRecord.findMany()
    * ```
    */
  get qRRecord(): Prisma.QRRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    CardSet: 'CardSet',
    Card: 'Card',
    Submission: 'Submission',
    GradingReport: 'GradingReport',
    Certificate: 'Certificate',
    Slab: 'Slab',
    NFCRecord: 'NFCRecord',
    QRRecord: 'QRRecord',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "cardSet" | "card" | "submission" | "gradingReport" | "certificate" | "slab" | "nFCRecord" | "qRRecord" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      CardSet: {
        payload: Prisma.$CardSetPayload<ExtArgs>
        fields: Prisma.CardSetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardSetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardSetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          findFirst: {
            args: Prisma.CardSetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardSetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          findMany: {
            args: Prisma.CardSetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>[]
          }
          create: {
            args: Prisma.CardSetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          createMany: {
            args: Prisma.CardSetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardSetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>[]
          }
          delete: {
            args: Prisma.CardSetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          update: {
            args: Prisma.CardSetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          deleteMany: {
            args: Prisma.CardSetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardSetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardSetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>[]
          }
          upsert: {
            args: Prisma.CardSetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardSetPayload>
          }
          aggregate: {
            args: Prisma.CardSetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCardSet>
          }
          groupBy: {
            args: Prisma.CardSetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardSetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardSetCountArgs<ExtArgs>
            result: $Utils.Optional<CardSetCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      GradingReport: {
        payload: Prisma.$GradingReportPayload<ExtArgs>
        fields: Prisma.GradingReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GradingReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GradingReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>
          }
          findFirst: {
            args: Prisma.GradingReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GradingReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>
          }
          findMany: {
            args: Prisma.GradingReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>[]
          }
          create: {
            args: Prisma.GradingReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>
          }
          createMany: {
            args: Prisma.GradingReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GradingReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>[]
          }
          delete: {
            args: Prisma.GradingReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>
          }
          update: {
            args: Prisma.GradingReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>
          }
          deleteMany: {
            args: Prisma.GradingReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GradingReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GradingReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>[]
          }
          upsert: {
            args: Prisma.GradingReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GradingReportPayload>
          }
          aggregate: {
            args: Prisma.GradingReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGradingReport>
          }
          groupBy: {
            args: Prisma.GradingReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<GradingReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.GradingReportCountArgs<ExtArgs>
            result: $Utils.Optional<GradingReportCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      Slab: {
        payload: Prisma.$SlabPayload<ExtArgs>
        fields: Prisma.SlabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>
          }
          findFirst: {
            args: Prisma.SlabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>
          }
          findMany: {
            args: Prisma.SlabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>[]
          }
          create: {
            args: Prisma.SlabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>
          }
          createMany: {
            args: Prisma.SlabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>[]
          }
          delete: {
            args: Prisma.SlabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>
          }
          update: {
            args: Prisma.SlabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>
          }
          deleteMany: {
            args: Prisma.SlabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>[]
          }
          upsert: {
            args: Prisma.SlabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlabPayload>
          }
          aggregate: {
            args: Prisma.SlabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlab>
          }
          groupBy: {
            args: Prisma.SlabGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlabGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlabCountArgs<ExtArgs>
            result: $Utils.Optional<SlabCountAggregateOutputType> | number
          }
        }
      }
      NFCRecord: {
        payload: Prisma.$NFCRecordPayload<ExtArgs>
        fields: Prisma.NFCRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NFCRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NFCRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>
          }
          findFirst: {
            args: Prisma.NFCRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NFCRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>
          }
          findMany: {
            args: Prisma.NFCRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>[]
          }
          create: {
            args: Prisma.NFCRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>
          }
          createMany: {
            args: Prisma.NFCRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NFCRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>[]
          }
          delete: {
            args: Prisma.NFCRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>
          }
          update: {
            args: Prisma.NFCRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>
          }
          deleteMany: {
            args: Prisma.NFCRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NFCRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NFCRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>[]
          }
          upsert: {
            args: Prisma.NFCRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NFCRecordPayload>
          }
          aggregate: {
            args: Prisma.NFCRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNFCRecord>
          }
          groupBy: {
            args: Prisma.NFCRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<NFCRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.NFCRecordCountArgs<ExtArgs>
            result: $Utils.Optional<NFCRecordCountAggregateOutputType> | number
          }
        }
      }
      QRRecord: {
        payload: Prisma.$QRRecordPayload<ExtArgs>
        fields: Prisma.QRRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QRRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QRRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>
          }
          findFirst: {
            args: Prisma.QRRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QRRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>
          }
          findMany: {
            args: Prisma.QRRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>[]
          }
          create: {
            args: Prisma.QRRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>
          }
          createMany: {
            args: Prisma.QRRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QRRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>[]
          }
          delete: {
            args: Prisma.QRRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>
          }
          update: {
            args: Prisma.QRRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>
          }
          deleteMany: {
            args: Prisma.QRRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QRRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QRRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>[]
          }
          upsert: {
            args: Prisma.QRRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QRRecordPayload>
          }
          aggregate: {
            args: Prisma.QRRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQRRecord>
          }
          groupBy: {
            args: Prisma.QRRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<QRRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.QRRecordCountArgs<ExtArgs>
            result: $Utils.Optional<QRRecordCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    cardSet?: CardSetOmit
    card?: CardOmit
    submission?: SubmissionOmit
    gradingReport?: GradingReportOmit
    certificate?: CertificateOmit
    slab?: SlabOmit
    nFCRecord?: NFCRecordOmit
    qRRecord?: QRRecordOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    submissions: number
    auditLogs: number
    certificates: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    certificates?: boolean | UserCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Count Type CardSetCountOutputType
   */

  export type CardSetCountOutputType = {
    cards: number
  }

  export type CardSetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | CardSetCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * CardSetCountOutputType without action
   */
  export type CardSetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSetCountOutputType
     */
    select?: CardSetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardSetCountOutputType without action
   */
  export type CardSetCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    submissions: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | CardCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    gradingReports: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gradingReports?: boolean | SubmissionCountOutputTypeCountGradingReportsArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountGradingReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradingReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    displayName: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    displayName: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    displayName?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    displayName: string | null
    role: $Enums.UserRole
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    displayName?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "displayName" | "role" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    certificates?: boolean | User$certificatesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      displayName: string | null
      role: $Enums.UserRole
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    certificates<T extends User$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, User$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.certificates
   */
  export type User$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tokenHash: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    tokenHash: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    tokenHash?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    tokenHash: string
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tokenHash" | "expiresAt" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tokenHash: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly tokenHash: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model CardSet
   */

  export type AggregateCardSet = {
    _count: CardSetCountAggregateOutputType | null
    _avg: CardSetAvgAggregateOutputType | null
    _sum: CardSetSumAggregateOutputType | null
    _min: CardSetMinAggregateOutputType | null
    _max: CardSetMaxAggregateOutputType | null
  }

  export type CardSetAvgAggregateOutputType = {
    year: number | null
  }

  export type CardSetSumAggregateOutputType = {
    year: number | null
  }

  export type CardSetMinAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    year: number | null
    createdAt: Date | null
  }

  export type CardSetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brand: string | null
    year: number | null
    createdAt: Date | null
  }

  export type CardSetCountAggregateOutputType = {
    id: number
    name: number
    brand: number
    year: number
    createdAt: number
    _all: number
  }


  export type CardSetAvgAggregateInputType = {
    year?: true
  }

  export type CardSetSumAggregateInputType = {
    year?: true
  }

  export type CardSetMinAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    year?: true
    createdAt?: true
  }

  export type CardSetMaxAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    year?: true
    createdAt?: true
  }

  export type CardSetCountAggregateInputType = {
    id?: true
    name?: true
    brand?: true
    year?: true
    createdAt?: true
    _all?: true
  }

  export type CardSetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardSet to aggregate.
     */
    where?: CardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardSets to fetch.
     */
    orderBy?: CardSetOrderByWithRelationInput | CardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CardSets
    **/
    _count?: true | CardSetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardSetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardSetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardSetMaxAggregateInputType
  }

  export type GetCardSetAggregateType<T extends CardSetAggregateArgs> = {
        [P in keyof T & keyof AggregateCardSet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCardSet[P]>
      : GetScalarType<T[P], AggregateCardSet[P]>
  }




  export type CardSetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardSetWhereInput
    orderBy?: CardSetOrderByWithAggregationInput | CardSetOrderByWithAggregationInput[]
    by: CardSetScalarFieldEnum[] | CardSetScalarFieldEnum
    having?: CardSetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardSetCountAggregateInputType | true
    _avg?: CardSetAvgAggregateInputType
    _sum?: CardSetSumAggregateInputType
    _min?: CardSetMinAggregateInputType
    _max?: CardSetMaxAggregateInputType
  }

  export type CardSetGroupByOutputType = {
    id: string
    name: string
    brand: string
    year: number | null
    createdAt: Date
    _count: CardSetCountAggregateOutputType | null
    _avg: CardSetAvgAggregateOutputType | null
    _sum: CardSetSumAggregateOutputType | null
    _min: CardSetMinAggregateOutputType | null
    _max: CardSetMaxAggregateOutputType | null
  }

  type GetCardSetGroupByPayload<T extends CardSetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardSetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardSetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardSetGroupByOutputType[P]>
            : GetScalarType<T[P], CardSetGroupByOutputType[P]>
        }
      >
    >


  export type CardSetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    year?: boolean
    createdAt?: boolean
    cards?: boolean | CardSet$cardsArgs<ExtArgs>
    _count?: boolean | CardSetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cardSet"]>

  export type CardSetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    year?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cardSet"]>

  export type CardSetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brand?: boolean
    year?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cardSet"]>

  export type CardSetSelectScalar = {
    id?: boolean
    name?: boolean
    brand?: boolean
    year?: boolean
    createdAt?: boolean
  }

  export type CardSetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brand" | "year" | "createdAt", ExtArgs["result"]["cardSet"]>
  export type CardSetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cards?: boolean | CardSet$cardsArgs<ExtArgs>
    _count?: boolean | CardSetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardSetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CardSetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CardSetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CardSet"
    objects: {
      cards: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brand: string
      year: number | null
      createdAt: Date
    }, ExtArgs["result"]["cardSet"]>
    composites: {}
  }

  type CardSetGetPayload<S extends boolean | null | undefined | CardSetDefaultArgs> = $Result.GetResult<Prisma.$CardSetPayload, S>

  type CardSetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardSetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardSetCountAggregateInputType | true
    }

  export interface CardSetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CardSet'], meta: { name: 'CardSet' } }
    /**
     * Find zero or one CardSet that matches the filter.
     * @param {CardSetFindUniqueArgs} args - Arguments to find a CardSet
     * @example
     * // Get one CardSet
     * const cardSet = await prisma.cardSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardSetFindUniqueArgs>(args: SelectSubset<T, CardSetFindUniqueArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CardSet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardSetFindUniqueOrThrowArgs} args - Arguments to find a CardSet
     * @example
     * // Get one CardSet
     * const cardSet = await prisma.cardSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardSetFindUniqueOrThrowArgs>(args: SelectSubset<T, CardSetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetFindFirstArgs} args - Arguments to find a CardSet
     * @example
     * // Get one CardSet
     * const cardSet = await prisma.cardSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardSetFindFirstArgs>(args?: SelectSubset<T, CardSetFindFirstArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CardSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetFindFirstOrThrowArgs} args - Arguments to find a CardSet
     * @example
     * // Get one CardSet
     * const cardSet = await prisma.cardSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardSetFindFirstOrThrowArgs>(args?: SelectSubset<T, CardSetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CardSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CardSets
     * const cardSets = await prisma.cardSet.findMany()
     * 
     * // Get first 10 CardSets
     * const cardSets = await prisma.cardSet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardSetWithIdOnly = await prisma.cardSet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardSetFindManyArgs>(args?: SelectSubset<T, CardSetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CardSet.
     * @param {CardSetCreateArgs} args - Arguments to create a CardSet.
     * @example
     * // Create one CardSet
     * const CardSet = await prisma.cardSet.create({
     *   data: {
     *     // ... data to create a CardSet
     *   }
     * })
     * 
     */
    create<T extends CardSetCreateArgs>(args: SelectSubset<T, CardSetCreateArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CardSets.
     * @param {CardSetCreateManyArgs} args - Arguments to create many CardSets.
     * @example
     * // Create many CardSets
     * const cardSet = await prisma.cardSet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardSetCreateManyArgs>(args?: SelectSubset<T, CardSetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CardSets and returns the data saved in the database.
     * @param {CardSetCreateManyAndReturnArgs} args - Arguments to create many CardSets.
     * @example
     * // Create many CardSets
     * const cardSet = await prisma.cardSet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CardSets and only return the `id`
     * const cardSetWithIdOnly = await prisma.cardSet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardSetCreateManyAndReturnArgs>(args?: SelectSubset<T, CardSetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CardSet.
     * @param {CardSetDeleteArgs} args - Arguments to delete one CardSet.
     * @example
     * // Delete one CardSet
     * const CardSet = await prisma.cardSet.delete({
     *   where: {
     *     // ... filter to delete one CardSet
     *   }
     * })
     * 
     */
    delete<T extends CardSetDeleteArgs>(args: SelectSubset<T, CardSetDeleteArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CardSet.
     * @param {CardSetUpdateArgs} args - Arguments to update one CardSet.
     * @example
     * // Update one CardSet
     * const cardSet = await prisma.cardSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardSetUpdateArgs>(args: SelectSubset<T, CardSetUpdateArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CardSets.
     * @param {CardSetDeleteManyArgs} args - Arguments to filter CardSets to delete.
     * @example
     * // Delete a few CardSets
     * const { count } = await prisma.cardSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardSetDeleteManyArgs>(args?: SelectSubset<T, CardSetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CardSets
     * const cardSet = await prisma.cardSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardSetUpdateManyArgs>(args: SelectSubset<T, CardSetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CardSets and returns the data updated in the database.
     * @param {CardSetUpdateManyAndReturnArgs} args - Arguments to update many CardSets.
     * @example
     * // Update many CardSets
     * const cardSet = await prisma.cardSet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CardSets and only return the `id`
     * const cardSetWithIdOnly = await prisma.cardSet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardSetUpdateManyAndReturnArgs>(args: SelectSubset<T, CardSetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CardSet.
     * @param {CardSetUpsertArgs} args - Arguments to update or create a CardSet.
     * @example
     * // Update or create a CardSet
     * const cardSet = await prisma.cardSet.upsert({
     *   create: {
     *     // ... data to create a CardSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CardSet we want to update
     *   }
     * })
     */
    upsert<T extends CardSetUpsertArgs>(args: SelectSubset<T, CardSetUpsertArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CardSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetCountArgs} args - Arguments to filter CardSets to count.
     * @example
     * // Count the number of CardSets
     * const count = await prisma.cardSet.count({
     *   where: {
     *     // ... the filter for the CardSets we want to count
     *   }
     * })
    **/
    count<T extends CardSetCountArgs>(
      args?: Subset<T, CardSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardSetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CardSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardSetAggregateArgs>(args: Subset<T, CardSetAggregateArgs>): Prisma.PrismaPromise<GetCardSetAggregateType<T>>

    /**
     * Group by CardSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardSetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardSetGroupByArgs['orderBy'] }
        : { orderBy?: CardSetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardSetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CardSet model
   */
  readonly fields: CardSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CardSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardSetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cards<T extends CardSet$cardsArgs<ExtArgs> = {}>(args?: Subset<T, CardSet$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CardSet model
   */
  interface CardSetFieldRefs {
    readonly id: FieldRef<"CardSet", 'String'>
    readonly name: FieldRef<"CardSet", 'String'>
    readonly brand: FieldRef<"CardSet", 'String'>
    readonly year: FieldRef<"CardSet", 'Int'>
    readonly createdAt: FieldRef<"CardSet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CardSet findUnique
   */
  export type CardSetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSet to fetch.
     */
    where: CardSetWhereUniqueInput
  }

  /**
   * CardSet findUniqueOrThrow
   */
  export type CardSetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSet to fetch.
     */
    where: CardSetWhereUniqueInput
  }

  /**
   * CardSet findFirst
   */
  export type CardSetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSet to fetch.
     */
    where?: CardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardSets to fetch.
     */
    orderBy?: CardSetOrderByWithRelationInput | CardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardSets.
     */
    cursor?: CardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardSets.
     */
    distinct?: CardSetScalarFieldEnum | CardSetScalarFieldEnum[]
  }

  /**
   * CardSet findFirstOrThrow
   */
  export type CardSetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSet to fetch.
     */
    where?: CardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardSets to fetch.
     */
    orderBy?: CardSetOrderByWithRelationInput | CardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CardSets.
     */
    cursor?: CardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardSets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CardSets.
     */
    distinct?: CardSetScalarFieldEnum | CardSetScalarFieldEnum[]
  }

  /**
   * CardSet findMany
   */
  export type CardSetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter, which CardSets to fetch.
     */
    where?: CardSetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CardSets to fetch.
     */
    orderBy?: CardSetOrderByWithRelationInput | CardSetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CardSets.
     */
    cursor?: CardSetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CardSets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CardSets.
     */
    skip?: number
    distinct?: CardSetScalarFieldEnum | CardSetScalarFieldEnum[]
  }

  /**
   * CardSet create
   */
  export type CardSetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * The data needed to create a CardSet.
     */
    data: XOR<CardSetCreateInput, CardSetUncheckedCreateInput>
  }

  /**
   * CardSet createMany
   */
  export type CardSetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CardSets.
     */
    data: CardSetCreateManyInput | CardSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardSet createManyAndReturn
   */
  export type CardSetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * The data used to create many CardSets.
     */
    data: CardSetCreateManyInput | CardSetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CardSet update
   */
  export type CardSetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * The data needed to update a CardSet.
     */
    data: XOR<CardSetUpdateInput, CardSetUncheckedUpdateInput>
    /**
     * Choose, which CardSet to update.
     */
    where: CardSetWhereUniqueInput
  }

  /**
   * CardSet updateMany
   */
  export type CardSetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CardSets.
     */
    data: XOR<CardSetUpdateManyMutationInput, CardSetUncheckedUpdateManyInput>
    /**
     * Filter which CardSets to update
     */
    where?: CardSetWhereInput
    /**
     * Limit how many CardSets to update.
     */
    limit?: number
  }

  /**
   * CardSet updateManyAndReturn
   */
  export type CardSetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * The data used to update CardSets.
     */
    data: XOR<CardSetUpdateManyMutationInput, CardSetUncheckedUpdateManyInput>
    /**
     * Filter which CardSets to update
     */
    where?: CardSetWhereInput
    /**
     * Limit how many CardSets to update.
     */
    limit?: number
  }

  /**
   * CardSet upsert
   */
  export type CardSetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * The filter to search for the CardSet to update in case it exists.
     */
    where: CardSetWhereUniqueInput
    /**
     * In case the CardSet found by the `where` argument doesn't exist, create a new CardSet with this data.
     */
    create: XOR<CardSetCreateInput, CardSetUncheckedCreateInput>
    /**
     * In case the CardSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardSetUpdateInput, CardSetUncheckedUpdateInput>
  }

  /**
   * CardSet delete
   */
  export type CardSetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
    /**
     * Filter which CardSet to delete.
     */
    where: CardSetWhereUniqueInput
  }

  /**
   * CardSet deleteMany
   */
  export type CardSetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CardSets to delete
     */
    where?: CardSetWhereInput
    /**
     * Limit how many CardSets to delete.
     */
    limit?: number
  }

  /**
   * CardSet.cards
   */
  export type CardSet$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * CardSet without action
   */
  export type CardSetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardSet
     */
    select?: CardSetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CardSet
     */
    omit?: CardSetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardSetInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    setId: string | null
    name: string | null
    collectorNo: string | null
    variant: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    setId: string | null
    name: string | null
    collectorNo: string | null
    variant: string | null
    language: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    setId: number
    name: number
    collectorNo: number
    variant: number
    language: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardMinAggregateInputType = {
    id?: true
    setId?: true
    name?: true
    collectorNo?: true
    variant?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    setId?: true
    name?: true
    collectorNo?: true
    variant?: true
    language?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    setId?: true
    name?: true
    collectorNo?: true
    variant?: true
    language?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    setId: string
    name: string
    collectorNo: string | null
    variant: string | null
    language: string | null
    createdAt: Date
    updatedAt: Date
    _count: CardCountAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    name?: boolean
    collectorNo?: boolean
    variant?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    set?: boolean | CardSetDefaultArgs<ExtArgs>
    submissions?: boolean | Card$submissionsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    name?: boolean
    collectorNo?: boolean
    variant?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    setId?: boolean
    name?: boolean
    collectorNo?: boolean
    variant?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    setId?: boolean
    name?: boolean
    collectorNo?: boolean
    variant?: boolean
    language?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "setId" | "name" | "collectorNo" | "variant" | "language" | "createdAt" | "updatedAt", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | CardSetDefaultArgs<ExtArgs>
    submissions?: boolean | Card$submissionsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }
  export type CardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    set?: boolean | CardSetDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      set: Prisma.$CardSetPayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      setId: string
      name: string
      collectorNo: string | null
      variant: string | null
      language: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards and returns the data updated in the database.
     * @param {CardUpdateManyAndReturnArgs} args - Arguments to update many Cards.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CardUpdateManyAndReturnArgs>(args: SelectSubset<T, CardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    set<T extends CardSetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardSetDefaultArgs<ExtArgs>>): Prisma__CardSetClient<$Result.GetResult<Prisma.$CardSetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Card$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Card$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly setId: FieldRef<"Card", 'String'>
    readonly name: FieldRef<"Card", 'String'>
    readonly collectorNo: FieldRef<"Card", 'String'>
    readonly variant: FieldRef<"Card", 'String'>
    readonly language: FieldRef<"Card", 'String'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
    readonly updatedAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card updateManyAndReturn
   */
  export type CardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.submissions
   */
  export type Card$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cardId: string | null
    status: $Enums.SubmissionStatus | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cardId: string | null
    status: $Enums.SubmissionStatus | null
    submittedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    cardId: number
    status: number
    submittedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    status?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    status?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    status?: true
    submittedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    cardId: string | null
    status: $Enums.SubmissionStatus
    submittedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardId?: boolean
    status?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Submission$cardArgs<ExtArgs>
    gradingReports?: boolean | Submission$gradingReportsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardId?: boolean
    status?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Submission$cardArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardId?: boolean
    status?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Submission$cardArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    cardId?: boolean
    status?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cardId" | "status" | "submittedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Submission$cardArgs<ExtArgs>
    gradingReports?: boolean | Submission$gradingReportsArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Submission$cardArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | Submission$cardArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      card: Prisma.$CardPayload<ExtArgs> | null
      gradingReports: Prisma.$GradingReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cardId: string | null
      status: $Enums.SubmissionStatus
      submittedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    card<T extends Submission$cardArgs<ExtArgs> = {}>(args?: Subset<T, Submission$cardArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gradingReports<T extends Submission$gradingReportsArgs<ExtArgs> = {}>(args?: Subset<T, Submission$gradingReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly cardId: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'SubmissionStatus'>
    readonly submittedAt: FieldRef<"Submission", 'DateTime'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.card
   */
  export type Submission$cardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
  }

  /**
   * Submission.gradingReports
   */
  export type Submission$gradingReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    where?: GradingReportWhereInput
    orderBy?: GradingReportOrderByWithRelationInput | GradingReportOrderByWithRelationInput[]
    cursor?: GradingReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GradingReportScalarFieldEnum | GradingReportScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model GradingReport
   */

  export type AggregateGradingReport = {
    _count: GradingReportCountAggregateOutputType | null
    _avg: GradingReportAvgAggregateOutputType | null
    _sum: GradingReportSumAggregateOutputType | null
    _min: GradingReportMinAggregateOutputType | null
    _max: GradingReportMaxAggregateOutputType | null
  }

  export type GradingReportAvgAggregateOutputType = {
    centering: Decimal | null
    corners: Decimal | null
    edges: Decimal | null
    surface: Decimal | null
    printQuality: Decimal | null
    whitening: Decimal | null
    proposedGrade: Decimal | null
    humanGrade: Decimal | null
  }

  export type GradingReportSumAggregateOutputType = {
    centering: Decimal | null
    corners: Decimal | null
    edges: Decimal | null
    surface: Decimal | null
    printQuality: Decimal | null
    whitening: Decimal | null
    proposedGrade: Decimal | null
    humanGrade: Decimal | null
  }

  export type GradingReportMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    methodologyVersion: string | null
    centering: Decimal | null
    corners: Decimal | null
    edges: Decimal | null
    surface: Decimal | null
    printQuality: Decimal | null
    whitening: Decimal | null
    proposedGrade: Decimal | null
    humanGrade: Decimal | null
    finalizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GradingReportMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    methodologyVersion: string | null
    centering: Decimal | null
    corners: Decimal | null
    edges: Decimal | null
    surface: Decimal | null
    printQuality: Decimal | null
    whitening: Decimal | null
    proposedGrade: Decimal | null
    humanGrade: Decimal | null
    finalizedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GradingReportCountAggregateOutputType = {
    id: number
    submissionId: number
    methodologyVersion: number
    centering: number
    corners: number
    edges: number
    surface: number
    printQuality: number
    whitening: number
    defects: number
    proposedGrade: number
    humanGrade: number
    finalizedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GradingReportAvgAggregateInputType = {
    centering?: true
    corners?: true
    edges?: true
    surface?: true
    printQuality?: true
    whitening?: true
    proposedGrade?: true
    humanGrade?: true
  }

  export type GradingReportSumAggregateInputType = {
    centering?: true
    corners?: true
    edges?: true
    surface?: true
    printQuality?: true
    whitening?: true
    proposedGrade?: true
    humanGrade?: true
  }

  export type GradingReportMinAggregateInputType = {
    id?: true
    submissionId?: true
    methodologyVersion?: true
    centering?: true
    corners?: true
    edges?: true
    surface?: true
    printQuality?: true
    whitening?: true
    proposedGrade?: true
    humanGrade?: true
    finalizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GradingReportMaxAggregateInputType = {
    id?: true
    submissionId?: true
    methodologyVersion?: true
    centering?: true
    corners?: true
    edges?: true
    surface?: true
    printQuality?: true
    whitening?: true
    proposedGrade?: true
    humanGrade?: true
    finalizedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GradingReportCountAggregateInputType = {
    id?: true
    submissionId?: true
    methodologyVersion?: true
    centering?: true
    corners?: true
    edges?: true
    surface?: true
    printQuality?: true
    whitening?: true
    defects?: true
    proposedGrade?: true
    humanGrade?: true
    finalizedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GradingReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradingReport to aggregate.
     */
    where?: GradingReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingReports to fetch.
     */
    orderBy?: GradingReportOrderByWithRelationInput | GradingReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GradingReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GradingReports
    **/
    _count?: true | GradingReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GradingReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GradingReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GradingReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GradingReportMaxAggregateInputType
  }

  export type GetGradingReportAggregateType<T extends GradingReportAggregateArgs> = {
        [P in keyof T & keyof AggregateGradingReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGradingReport[P]>
      : GetScalarType<T[P], AggregateGradingReport[P]>
  }




  export type GradingReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GradingReportWhereInput
    orderBy?: GradingReportOrderByWithAggregationInput | GradingReportOrderByWithAggregationInput[]
    by: GradingReportScalarFieldEnum[] | GradingReportScalarFieldEnum
    having?: GradingReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GradingReportCountAggregateInputType | true
    _avg?: GradingReportAvgAggregateInputType
    _sum?: GradingReportSumAggregateInputType
    _min?: GradingReportMinAggregateInputType
    _max?: GradingReportMaxAggregateInputType
  }

  export type GradingReportGroupByOutputType = {
    id: string
    submissionId: string
    methodologyVersion: string
    centering: Decimal | null
    corners: Decimal | null
    edges: Decimal | null
    surface: Decimal | null
    printQuality: Decimal | null
    whitening: Decimal | null
    defects: JsonValue | null
    proposedGrade: Decimal | null
    humanGrade: Decimal | null
    finalizedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: GradingReportCountAggregateOutputType | null
    _avg: GradingReportAvgAggregateOutputType | null
    _sum: GradingReportSumAggregateOutputType | null
    _min: GradingReportMinAggregateOutputType | null
    _max: GradingReportMaxAggregateOutputType | null
  }

  type GetGradingReportGroupByPayload<T extends GradingReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GradingReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GradingReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GradingReportGroupByOutputType[P]>
            : GetScalarType<T[P], GradingReportGroupByOutputType[P]>
        }
      >
    >


  export type GradingReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    methodologyVersion?: boolean
    centering?: boolean
    corners?: boolean
    edges?: boolean
    surface?: boolean
    printQuality?: boolean
    whitening?: boolean
    defects?: boolean
    proposedGrade?: boolean
    humanGrade?: boolean
    finalizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    certificate?: boolean | GradingReport$certificateArgs<ExtArgs>
  }, ExtArgs["result"]["gradingReport"]>

  export type GradingReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    methodologyVersion?: boolean
    centering?: boolean
    corners?: boolean
    edges?: boolean
    surface?: boolean
    printQuality?: boolean
    whitening?: boolean
    defects?: boolean
    proposedGrade?: boolean
    humanGrade?: boolean
    finalizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradingReport"]>

  export type GradingReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    methodologyVersion?: boolean
    centering?: boolean
    corners?: boolean
    edges?: boolean
    surface?: boolean
    printQuality?: boolean
    whitening?: boolean
    defects?: boolean
    proposedGrade?: boolean
    humanGrade?: boolean
    finalizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gradingReport"]>

  export type GradingReportSelectScalar = {
    id?: boolean
    submissionId?: boolean
    methodologyVersion?: boolean
    centering?: boolean
    corners?: boolean
    edges?: boolean
    surface?: boolean
    printQuality?: boolean
    whitening?: boolean
    defects?: boolean
    proposedGrade?: boolean
    humanGrade?: boolean
    finalizedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GradingReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "methodologyVersion" | "centering" | "corners" | "edges" | "surface" | "printQuality" | "whitening" | "defects" | "proposedGrade" | "humanGrade" | "finalizedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["gradingReport"]>
  export type GradingReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
    certificate?: boolean | GradingReport$certificateArgs<ExtArgs>
  }
  export type GradingReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type GradingReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $GradingReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GradingReport"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
      certificate: Prisma.$CertificatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      methodologyVersion: string
      centering: Prisma.Decimal | null
      corners: Prisma.Decimal | null
      edges: Prisma.Decimal | null
      surface: Prisma.Decimal | null
      printQuality: Prisma.Decimal | null
      whitening: Prisma.Decimal | null
      defects: Prisma.JsonValue | null
      proposedGrade: Prisma.Decimal | null
      humanGrade: Prisma.Decimal | null
      finalizedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gradingReport"]>
    composites: {}
  }

  type GradingReportGetPayload<S extends boolean | null | undefined | GradingReportDefaultArgs> = $Result.GetResult<Prisma.$GradingReportPayload, S>

  type GradingReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GradingReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GradingReportCountAggregateInputType | true
    }

  export interface GradingReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GradingReport'], meta: { name: 'GradingReport' } }
    /**
     * Find zero or one GradingReport that matches the filter.
     * @param {GradingReportFindUniqueArgs} args - Arguments to find a GradingReport
     * @example
     * // Get one GradingReport
     * const gradingReport = await prisma.gradingReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GradingReportFindUniqueArgs>(args: SelectSubset<T, GradingReportFindUniqueArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GradingReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GradingReportFindUniqueOrThrowArgs} args - Arguments to find a GradingReport
     * @example
     * // Get one GradingReport
     * const gradingReport = await prisma.gradingReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GradingReportFindUniqueOrThrowArgs>(args: SelectSubset<T, GradingReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradingReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReportFindFirstArgs} args - Arguments to find a GradingReport
     * @example
     * // Get one GradingReport
     * const gradingReport = await prisma.gradingReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GradingReportFindFirstArgs>(args?: SelectSubset<T, GradingReportFindFirstArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GradingReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReportFindFirstOrThrowArgs} args - Arguments to find a GradingReport
     * @example
     * // Get one GradingReport
     * const gradingReport = await prisma.gradingReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GradingReportFindFirstOrThrowArgs>(args?: SelectSubset<T, GradingReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GradingReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GradingReports
     * const gradingReports = await prisma.gradingReport.findMany()
     * 
     * // Get first 10 GradingReports
     * const gradingReports = await prisma.gradingReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gradingReportWithIdOnly = await prisma.gradingReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GradingReportFindManyArgs>(args?: SelectSubset<T, GradingReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GradingReport.
     * @param {GradingReportCreateArgs} args - Arguments to create a GradingReport.
     * @example
     * // Create one GradingReport
     * const GradingReport = await prisma.gradingReport.create({
     *   data: {
     *     // ... data to create a GradingReport
     *   }
     * })
     * 
     */
    create<T extends GradingReportCreateArgs>(args: SelectSubset<T, GradingReportCreateArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GradingReports.
     * @param {GradingReportCreateManyArgs} args - Arguments to create many GradingReports.
     * @example
     * // Create many GradingReports
     * const gradingReport = await prisma.gradingReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GradingReportCreateManyArgs>(args?: SelectSubset<T, GradingReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GradingReports and returns the data saved in the database.
     * @param {GradingReportCreateManyAndReturnArgs} args - Arguments to create many GradingReports.
     * @example
     * // Create many GradingReports
     * const gradingReport = await prisma.gradingReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GradingReports and only return the `id`
     * const gradingReportWithIdOnly = await prisma.gradingReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GradingReportCreateManyAndReturnArgs>(args?: SelectSubset<T, GradingReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GradingReport.
     * @param {GradingReportDeleteArgs} args - Arguments to delete one GradingReport.
     * @example
     * // Delete one GradingReport
     * const GradingReport = await prisma.gradingReport.delete({
     *   where: {
     *     // ... filter to delete one GradingReport
     *   }
     * })
     * 
     */
    delete<T extends GradingReportDeleteArgs>(args: SelectSubset<T, GradingReportDeleteArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GradingReport.
     * @param {GradingReportUpdateArgs} args - Arguments to update one GradingReport.
     * @example
     * // Update one GradingReport
     * const gradingReport = await prisma.gradingReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GradingReportUpdateArgs>(args: SelectSubset<T, GradingReportUpdateArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GradingReports.
     * @param {GradingReportDeleteManyArgs} args - Arguments to filter GradingReports to delete.
     * @example
     * // Delete a few GradingReports
     * const { count } = await prisma.gradingReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GradingReportDeleteManyArgs>(args?: SelectSubset<T, GradingReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradingReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GradingReports
     * const gradingReport = await prisma.gradingReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GradingReportUpdateManyArgs>(args: SelectSubset<T, GradingReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GradingReports and returns the data updated in the database.
     * @param {GradingReportUpdateManyAndReturnArgs} args - Arguments to update many GradingReports.
     * @example
     * // Update many GradingReports
     * const gradingReport = await prisma.gradingReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GradingReports and only return the `id`
     * const gradingReportWithIdOnly = await prisma.gradingReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GradingReportUpdateManyAndReturnArgs>(args: SelectSubset<T, GradingReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GradingReport.
     * @param {GradingReportUpsertArgs} args - Arguments to update or create a GradingReport.
     * @example
     * // Update or create a GradingReport
     * const gradingReport = await prisma.gradingReport.upsert({
     *   create: {
     *     // ... data to create a GradingReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GradingReport we want to update
     *   }
     * })
     */
    upsert<T extends GradingReportUpsertArgs>(args: SelectSubset<T, GradingReportUpsertArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GradingReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReportCountArgs} args - Arguments to filter GradingReports to count.
     * @example
     * // Count the number of GradingReports
     * const count = await prisma.gradingReport.count({
     *   where: {
     *     // ... the filter for the GradingReports we want to count
     *   }
     * })
    **/
    count<T extends GradingReportCountArgs>(
      args?: Subset<T, GradingReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GradingReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GradingReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GradingReportAggregateArgs>(args: Subset<T, GradingReportAggregateArgs>): Prisma.PrismaPromise<GetGradingReportAggregateType<T>>

    /**
     * Group by GradingReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GradingReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GradingReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GradingReportGroupByArgs['orderBy'] }
        : { orderBy?: GradingReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GradingReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGradingReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GradingReport model
   */
  readonly fields: GradingReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GradingReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GradingReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    certificate<T extends GradingReport$certificateArgs<ExtArgs> = {}>(args?: Subset<T, GradingReport$certificateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GradingReport model
   */
  interface GradingReportFieldRefs {
    readonly id: FieldRef<"GradingReport", 'String'>
    readonly submissionId: FieldRef<"GradingReport", 'String'>
    readonly methodologyVersion: FieldRef<"GradingReport", 'String'>
    readonly centering: FieldRef<"GradingReport", 'Decimal'>
    readonly corners: FieldRef<"GradingReport", 'Decimal'>
    readonly edges: FieldRef<"GradingReport", 'Decimal'>
    readonly surface: FieldRef<"GradingReport", 'Decimal'>
    readonly printQuality: FieldRef<"GradingReport", 'Decimal'>
    readonly whitening: FieldRef<"GradingReport", 'Decimal'>
    readonly defects: FieldRef<"GradingReport", 'Json'>
    readonly proposedGrade: FieldRef<"GradingReport", 'Decimal'>
    readonly humanGrade: FieldRef<"GradingReport", 'Decimal'>
    readonly finalizedAt: FieldRef<"GradingReport", 'DateTime'>
    readonly createdAt: FieldRef<"GradingReport", 'DateTime'>
    readonly updatedAt: FieldRef<"GradingReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GradingReport findUnique
   */
  export type GradingReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * Filter, which GradingReport to fetch.
     */
    where: GradingReportWhereUniqueInput
  }

  /**
   * GradingReport findUniqueOrThrow
   */
  export type GradingReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * Filter, which GradingReport to fetch.
     */
    where: GradingReportWhereUniqueInput
  }

  /**
   * GradingReport findFirst
   */
  export type GradingReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * Filter, which GradingReport to fetch.
     */
    where?: GradingReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingReports to fetch.
     */
    orderBy?: GradingReportOrderByWithRelationInput | GradingReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradingReports.
     */
    cursor?: GradingReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradingReports.
     */
    distinct?: GradingReportScalarFieldEnum | GradingReportScalarFieldEnum[]
  }

  /**
   * GradingReport findFirstOrThrow
   */
  export type GradingReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * Filter, which GradingReport to fetch.
     */
    where?: GradingReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingReports to fetch.
     */
    orderBy?: GradingReportOrderByWithRelationInput | GradingReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GradingReports.
     */
    cursor?: GradingReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GradingReports.
     */
    distinct?: GradingReportScalarFieldEnum | GradingReportScalarFieldEnum[]
  }

  /**
   * GradingReport findMany
   */
  export type GradingReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * Filter, which GradingReports to fetch.
     */
    where?: GradingReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GradingReports to fetch.
     */
    orderBy?: GradingReportOrderByWithRelationInput | GradingReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GradingReports.
     */
    cursor?: GradingReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GradingReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GradingReports.
     */
    skip?: number
    distinct?: GradingReportScalarFieldEnum | GradingReportScalarFieldEnum[]
  }

  /**
   * GradingReport create
   */
  export type GradingReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * The data needed to create a GradingReport.
     */
    data: XOR<GradingReportCreateInput, GradingReportUncheckedCreateInput>
  }

  /**
   * GradingReport createMany
   */
  export type GradingReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GradingReports.
     */
    data: GradingReportCreateManyInput | GradingReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GradingReport createManyAndReturn
   */
  export type GradingReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * The data used to create many GradingReports.
     */
    data: GradingReportCreateManyInput | GradingReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GradingReport update
   */
  export type GradingReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * The data needed to update a GradingReport.
     */
    data: XOR<GradingReportUpdateInput, GradingReportUncheckedUpdateInput>
    /**
     * Choose, which GradingReport to update.
     */
    where: GradingReportWhereUniqueInput
  }

  /**
   * GradingReport updateMany
   */
  export type GradingReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GradingReports.
     */
    data: XOR<GradingReportUpdateManyMutationInput, GradingReportUncheckedUpdateManyInput>
    /**
     * Filter which GradingReports to update
     */
    where?: GradingReportWhereInput
    /**
     * Limit how many GradingReports to update.
     */
    limit?: number
  }

  /**
   * GradingReport updateManyAndReturn
   */
  export type GradingReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * The data used to update GradingReports.
     */
    data: XOR<GradingReportUpdateManyMutationInput, GradingReportUncheckedUpdateManyInput>
    /**
     * Filter which GradingReports to update
     */
    where?: GradingReportWhereInput
    /**
     * Limit how many GradingReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GradingReport upsert
   */
  export type GradingReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * The filter to search for the GradingReport to update in case it exists.
     */
    where: GradingReportWhereUniqueInput
    /**
     * In case the GradingReport found by the `where` argument doesn't exist, create a new GradingReport with this data.
     */
    create: XOR<GradingReportCreateInput, GradingReportUncheckedCreateInput>
    /**
     * In case the GradingReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GradingReportUpdateInput, GradingReportUncheckedUpdateInput>
  }

  /**
   * GradingReport delete
   */
  export type GradingReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
    /**
     * Filter which GradingReport to delete.
     */
    where: GradingReportWhereUniqueInput
  }

  /**
   * GradingReport deleteMany
   */
  export type GradingReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GradingReports to delete
     */
    where?: GradingReportWhereInput
    /**
     * Limit how many GradingReports to delete.
     */
    limit?: number
  }

  /**
   * GradingReport.certificate
   */
  export type GradingReport$certificateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
  }

  /**
   * GradingReport without action
   */
  export type GradingReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GradingReport
     */
    select?: GradingReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GradingReport
     */
    omit?: GradingReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GradingReportInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    finalGrade: Decimal | null
  }

  export type CertificateSumAggregateOutputType = {
    finalGrade: Decimal | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    gradingReportId: string | null
    certificateNo: string | null
    serialNo: string | null
    status: $Enums.CertificateStatus | null
    finalGrade: Decimal | null
    graderId: string | null
    verificationHash: string | null
    certifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    gradingReportId: string | null
    certificateNo: string | null
    serialNo: string | null
    status: $Enums.CertificateStatus | null
    finalGrade: Decimal | null
    graderId: string | null
    verificationHash: string | null
    certifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    gradingReportId: number
    certificateNo: number
    serialNo: number
    status: number
    finalGrade: number
    graderId: number
    verificationHash: number
    certifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    finalGrade?: true
  }

  export type CertificateSumAggregateInputType = {
    finalGrade?: true
  }

  export type CertificateMinAggregateInputType = {
    id?: true
    gradingReportId?: true
    certificateNo?: true
    serialNo?: true
    status?: true
    finalGrade?: true
    graderId?: true
    verificationHash?: true
    certifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    gradingReportId?: true
    certificateNo?: true
    serialNo?: true
    status?: true
    finalGrade?: true
    graderId?: true
    verificationHash?: true
    certifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    gradingReportId?: true
    certificateNo?: true
    serialNo?: true
    status?: true
    finalGrade?: true
    graderId?: true
    verificationHash?: true
    certifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    gradingReportId: string
    certificateNo: string
    serialNo: string
    status: $Enums.CertificateStatus
    finalGrade: Decimal | null
    graderId: string | null
    verificationHash: string | null
    certifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gradingReportId?: boolean
    certificateNo?: boolean
    serialNo?: boolean
    status?: boolean
    finalGrade?: boolean
    graderId?: boolean
    verificationHash?: boolean
    certifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gradingReport?: boolean | GradingReportDefaultArgs<ExtArgs>
    grader?: boolean | Certificate$graderArgs<ExtArgs>
    slab?: boolean | Certificate$slabArgs<ExtArgs>
    nfcRecord?: boolean | Certificate$nfcRecordArgs<ExtArgs>
    qrRecord?: boolean | Certificate$qrRecordArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gradingReportId?: boolean
    certificateNo?: boolean
    serialNo?: boolean
    status?: boolean
    finalGrade?: boolean
    graderId?: boolean
    verificationHash?: boolean
    certifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gradingReport?: boolean | GradingReportDefaultArgs<ExtArgs>
    grader?: boolean | Certificate$graderArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gradingReportId?: boolean
    certificateNo?: boolean
    serialNo?: boolean
    status?: boolean
    finalGrade?: boolean
    graderId?: boolean
    verificationHash?: boolean
    certifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gradingReport?: boolean | GradingReportDefaultArgs<ExtArgs>
    grader?: boolean | Certificate$graderArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    gradingReportId?: boolean
    certificateNo?: boolean
    serialNo?: boolean
    status?: boolean
    finalGrade?: boolean
    graderId?: boolean
    verificationHash?: boolean
    certifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gradingReportId" | "certificateNo" | "serialNo" | "status" | "finalGrade" | "graderId" | "verificationHash" | "certifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gradingReport?: boolean | GradingReportDefaultArgs<ExtArgs>
    grader?: boolean | Certificate$graderArgs<ExtArgs>
    slab?: boolean | Certificate$slabArgs<ExtArgs>
    nfcRecord?: boolean | Certificate$nfcRecordArgs<ExtArgs>
    qrRecord?: boolean | Certificate$qrRecordArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gradingReport?: boolean | GradingReportDefaultArgs<ExtArgs>
    grader?: boolean | Certificate$graderArgs<ExtArgs>
  }
  export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gradingReport?: boolean | GradingReportDefaultArgs<ExtArgs>
    grader?: boolean | Certificate$graderArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      gradingReport: Prisma.$GradingReportPayload<ExtArgs>
      grader: Prisma.$UserPayload<ExtArgs> | null
      slab: Prisma.$SlabPayload<ExtArgs> | null
      nfcRecord: Prisma.$NFCRecordPayload<ExtArgs> | null
      qrRecord: Prisma.$QRRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gradingReportId: string
      certificateNo: string
      serialNo: string
      status: $Enums.CertificateStatus
      finalGrade: Prisma.Decimal | null
      graderId: string | null
      verificationHash: string | null
      certifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gradingReport<T extends GradingReportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GradingReportDefaultArgs<ExtArgs>>): Prisma__GradingReportClient<$Result.GetResult<Prisma.$GradingReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    grader<T extends Certificate$graderArgs<ExtArgs> = {}>(args?: Subset<T, Certificate$graderArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    slab<T extends Certificate$slabArgs<ExtArgs> = {}>(args?: Subset<T, Certificate$slabArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nfcRecord<T extends Certificate$nfcRecordArgs<ExtArgs> = {}>(args?: Subset<T, Certificate$nfcRecordArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    qrRecord<T extends Certificate$qrRecordArgs<ExtArgs> = {}>(args?: Subset<T, Certificate$qrRecordArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly gradingReportId: FieldRef<"Certificate", 'String'>
    readonly certificateNo: FieldRef<"Certificate", 'String'>
    readonly serialNo: FieldRef<"Certificate", 'String'>
    readonly status: FieldRef<"Certificate", 'CertificateStatus'>
    readonly finalGrade: FieldRef<"Certificate", 'Decimal'>
    readonly graderId: FieldRef<"Certificate", 'String'>
    readonly verificationHash: FieldRef<"Certificate", 'String'>
    readonly certifiedAt: FieldRef<"Certificate", 'DateTime'>
    readonly createdAt: FieldRef<"Certificate", 'DateTime'>
    readonly updatedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate.grader
   */
  export type Certificate$graderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Certificate.slab
   */
  export type Certificate$slabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    where?: SlabWhereInput
  }

  /**
   * Certificate.nfcRecord
   */
  export type Certificate$nfcRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    where?: NFCRecordWhereInput
  }

  /**
   * Certificate.qrRecord
   */
  export type Certificate$qrRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    where?: QRRecordWhereInput
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model Slab
   */

  export type AggregateSlab = {
    _count: SlabCountAggregateOutputType | null
    _min: SlabMinAggregateOutputType | null
    _max: SlabMaxAggregateOutputType | null
  }

  export type SlabMinAggregateOutputType = {
    id: string | null
    certificateId: string | null
    status: $Enums.SlabStatus | null
    model: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlabMaxAggregateOutputType = {
    id: string | null
    certificateId: string | null
    status: $Enums.SlabStatus | null
    model: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlabCountAggregateOutputType = {
    id: number
    certificateId: number
    status: number
    model: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SlabMinAggregateInputType = {
    id?: true
    certificateId?: true
    status?: true
    model?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlabMaxAggregateInputType = {
    id?: true
    certificateId?: true
    status?: true
    model?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlabCountAggregateInputType = {
    id?: true
    certificateId?: true
    status?: true
    model?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SlabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slab to aggregate.
     */
    where?: SlabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slabs to fetch.
     */
    orderBy?: SlabOrderByWithRelationInput | SlabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slabs
    **/
    _count?: true | SlabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlabMaxAggregateInputType
  }

  export type GetSlabAggregateType<T extends SlabAggregateArgs> = {
        [P in keyof T & keyof AggregateSlab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlab[P]>
      : GetScalarType<T[P], AggregateSlab[P]>
  }




  export type SlabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlabWhereInput
    orderBy?: SlabOrderByWithAggregationInput | SlabOrderByWithAggregationInput[]
    by: SlabScalarFieldEnum[] | SlabScalarFieldEnum
    having?: SlabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlabCountAggregateInputType | true
    _min?: SlabMinAggregateInputType
    _max?: SlabMaxAggregateInputType
  }

  export type SlabGroupByOutputType = {
    id: string
    certificateId: string
    status: $Enums.SlabStatus
    model: string | null
    createdAt: Date
    updatedAt: Date
    _count: SlabCountAggregateOutputType | null
    _min: SlabMinAggregateOutputType | null
    _max: SlabMaxAggregateOutputType | null
  }

  type GetSlabGroupByPayload<T extends SlabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlabGroupByOutputType[P]>
            : GetScalarType<T[P], SlabGroupByOutputType[P]>
        }
      >
    >


  export type SlabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    status?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
    nfcRecord?: boolean | Slab$nfcRecordArgs<ExtArgs>
  }, ExtArgs["result"]["slab"]>

  export type SlabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    status?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slab"]>

  export type SlabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    status?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slab"]>

  export type SlabSelectScalar = {
    id?: boolean
    certificateId?: boolean
    status?: boolean
    model?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SlabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "certificateId" | "status" | "model" | "createdAt" | "updatedAt", ExtArgs["result"]["slab"]>
  export type SlabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
    nfcRecord?: boolean | Slab$nfcRecordArgs<ExtArgs>
  }
  export type SlabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }
  export type SlabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }

  export type $SlabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slab"
    objects: {
      certificate: Prisma.$CertificatePayload<ExtArgs>
      nfcRecord: Prisma.$NFCRecordPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      certificateId: string
      status: $Enums.SlabStatus
      model: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["slab"]>
    composites: {}
  }

  type SlabGetPayload<S extends boolean | null | undefined | SlabDefaultArgs> = $Result.GetResult<Prisma.$SlabPayload, S>

  type SlabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlabCountAggregateInputType | true
    }

  export interface SlabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slab'], meta: { name: 'Slab' } }
    /**
     * Find zero or one Slab that matches the filter.
     * @param {SlabFindUniqueArgs} args - Arguments to find a Slab
     * @example
     * // Get one Slab
     * const slab = await prisma.slab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlabFindUniqueArgs>(args: SelectSubset<T, SlabFindUniqueArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Slab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlabFindUniqueOrThrowArgs} args - Arguments to find a Slab
     * @example
     * // Get one Slab
     * const slab = await prisma.slab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlabFindUniqueOrThrowArgs>(args: SelectSubset<T, SlabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlabFindFirstArgs} args - Arguments to find a Slab
     * @example
     * // Get one Slab
     * const slab = await prisma.slab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlabFindFirstArgs>(args?: SelectSubset<T, SlabFindFirstArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Slab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlabFindFirstOrThrowArgs} args - Arguments to find a Slab
     * @example
     * // Get one Slab
     * const slab = await prisma.slab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlabFindFirstOrThrowArgs>(args?: SelectSubset<T, SlabFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Slabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slabs
     * const slabs = await prisma.slab.findMany()
     * 
     * // Get first 10 Slabs
     * const slabs = await prisma.slab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slabWithIdOnly = await prisma.slab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlabFindManyArgs>(args?: SelectSubset<T, SlabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Slab.
     * @param {SlabCreateArgs} args - Arguments to create a Slab.
     * @example
     * // Create one Slab
     * const Slab = await prisma.slab.create({
     *   data: {
     *     // ... data to create a Slab
     *   }
     * })
     * 
     */
    create<T extends SlabCreateArgs>(args: SelectSubset<T, SlabCreateArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Slabs.
     * @param {SlabCreateManyArgs} args - Arguments to create many Slabs.
     * @example
     * // Create many Slabs
     * const slab = await prisma.slab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlabCreateManyArgs>(args?: SelectSubset<T, SlabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Slabs and returns the data saved in the database.
     * @param {SlabCreateManyAndReturnArgs} args - Arguments to create many Slabs.
     * @example
     * // Create many Slabs
     * const slab = await prisma.slab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Slabs and only return the `id`
     * const slabWithIdOnly = await prisma.slab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlabCreateManyAndReturnArgs>(args?: SelectSubset<T, SlabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Slab.
     * @param {SlabDeleteArgs} args - Arguments to delete one Slab.
     * @example
     * // Delete one Slab
     * const Slab = await prisma.slab.delete({
     *   where: {
     *     // ... filter to delete one Slab
     *   }
     * })
     * 
     */
    delete<T extends SlabDeleteArgs>(args: SelectSubset<T, SlabDeleteArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Slab.
     * @param {SlabUpdateArgs} args - Arguments to update one Slab.
     * @example
     * // Update one Slab
     * const slab = await prisma.slab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlabUpdateArgs>(args: SelectSubset<T, SlabUpdateArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Slabs.
     * @param {SlabDeleteManyArgs} args - Arguments to filter Slabs to delete.
     * @example
     * // Delete a few Slabs
     * const { count } = await prisma.slab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlabDeleteManyArgs>(args?: SelectSubset<T, SlabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slabs
     * const slab = await prisma.slab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlabUpdateManyArgs>(args: SelectSubset<T, SlabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slabs and returns the data updated in the database.
     * @param {SlabUpdateManyAndReturnArgs} args - Arguments to update many Slabs.
     * @example
     * // Update many Slabs
     * const slab = await prisma.slab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Slabs and only return the `id`
     * const slabWithIdOnly = await prisma.slab.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlabUpdateManyAndReturnArgs>(args: SelectSubset<T, SlabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Slab.
     * @param {SlabUpsertArgs} args - Arguments to update or create a Slab.
     * @example
     * // Update or create a Slab
     * const slab = await prisma.slab.upsert({
     *   create: {
     *     // ... data to create a Slab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slab we want to update
     *   }
     * })
     */
    upsert<T extends SlabUpsertArgs>(args: SelectSubset<T, SlabUpsertArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Slabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlabCountArgs} args - Arguments to filter Slabs to count.
     * @example
     * // Count the number of Slabs
     * const count = await prisma.slab.count({
     *   where: {
     *     // ... the filter for the Slabs we want to count
     *   }
     * })
    **/
    count<T extends SlabCountArgs>(
      args?: Subset<T, SlabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlabAggregateArgs>(args: Subset<T, SlabAggregateArgs>): Prisma.PrismaPromise<GetSlabAggregateType<T>>

    /**
     * Group by Slab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlabGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlabGroupByArgs['orderBy'] }
        : { orderBy?: SlabGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slab model
   */
  readonly fields: SlabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    certificate<T extends CertificateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CertificateDefaultArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nfcRecord<T extends Slab$nfcRecordArgs<ExtArgs> = {}>(args?: Subset<T, Slab$nfcRecordArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Slab model
   */
  interface SlabFieldRefs {
    readonly id: FieldRef<"Slab", 'String'>
    readonly certificateId: FieldRef<"Slab", 'String'>
    readonly status: FieldRef<"Slab", 'SlabStatus'>
    readonly model: FieldRef<"Slab", 'String'>
    readonly createdAt: FieldRef<"Slab", 'DateTime'>
    readonly updatedAt: FieldRef<"Slab", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Slab findUnique
   */
  export type SlabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * Filter, which Slab to fetch.
     */
    where: SlabWhereUniqueInput
  }

  /**
   * Slab findUniqueOrThrow
   */
  export type SlabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * Filter, which Slab to fetch.
     */
    where: SlabWhereUniqueInput
  }

  /**
   * Slab findFirst
   */
  export type SlabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * Filter, which Slab to fetch.
     */
    where?: SlabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slabs to fetch.
     */
    orderBy?: SlabOrderByWithRelationInput | SlabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slabs.
     */
    cursor?: SlabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slabs.
     */
    distinct?: SlabScalarFieldEnum | SlabScalarFieldEnum[]
  }

  /**
   * Slab findFirstOrThrow
   */
  export type SlabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * Filter, which Slab to fetch.
     */
    where?: SlabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slabs to fetch.
     */
    orderBy?: SlabOrderByWithRelationInput | SlabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slabs.
     */
    cursor?: SlabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slabs.
     */
    distinct?: SlabScalarFieldEnum | SlabScalarFieldEnum[]
  }

  /**
   * Slab findMany
   */
  export type SlabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * Filter, which Slabs to fetch.
     */
    where?: SlabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slabs to fetch.
     */
    orderBy?: SlabOrderByWithRelationInput | SlabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slabs.
     */
    cursor?: SlabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slabs.
     */
    skip?: number
    distinct?: SlabScalarFieldEnum | SlabScalarFieldEnum[]
  }

  /**
   * Slab create
   */
  export type SlabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * The data needed to create a Slab.
     */
    data: XOR<SlabCreateInput, SlabUncheckedCreateInput>
  }

  /**
   * Slab createMany
   */
  export type SlabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slabs.
     */
    data: SlabCreateManyInput | SlabCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slab createManyAndReturn
   */
  export type SlabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * The data used to create many Slabs.
     */
    data: SlabCreateManyInput | SlabCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Slab update
   */
  export type SlabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * The data needed to update a Slab.
     */
    data: XOR<SlabUpdateInput, SlabUncheckedUpdateInput>
    /**
     * Choose, which Slab to update.
     */
    where: SlabWhereUniqueInput
  }

  /**
   * Slab updateMany
   */
  export type SlabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slabs.
     */
    data: XOR<SlabUpdateManyMutationInput, SlabUncheckedUpdateManyInput>
    /**
     * Filter which Slabs to update
     */
    where?: SlabWhereInput
    /**
     * Limit how many Slabs to update.
     */
    limit?: number
  }

  /**
   * Slab updateManyAndReturn
   */
  export type SlabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * The data used to update Slabs.
     */
    data: XOR<SlabUpdateManyMutationInput, SlabUncheckedUpdateManyInput>
    /**
     * Filter which Slabs to update
     */
    where?: SlabWhereInput
    /**
     * Limit how many Slabs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Slab upsert
   */
  export type SlabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * The filter to search for the Slab to update in case it exists.
     */
    where: SlabWhereUniqueInput
    /**
     * In case the Slab found by the `where` argument doesn't exist, create a new Slab with this data.
     */
    create: XOR<SlabCreateInput, SlabUncheckedCreateInput>
    /**
     * In case the Slab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlabUpdateInput, SlabUncheckedUpdateInput>
  }

  /**
   * Slab delete
   */
  export type SlabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    /**
     * Filter which Slab to delete.
     */
    where: SlabWhereUniqueInput
  }

  /**
   * Slab deleteMany
   */
  export type SlabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slabs to delete
     */
    where?: SlabWhereInput
    /**
     * Limit how many Slabs to delete.
     */
    limit?: number
  }

  /**
   * Slab.nfcRecord
   */
  export type Slab$nfcRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    where?: NFCRecordWhereInput
  }

  /**
   * Slab without action
   */
  export type SlabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
  }


  /**
   * Model NFCRecord
   */

  export type AggregateNFCRecord = {
    _count: NFCRecordCountAggregateOutputType | null
    _min: NFCRecordMinAggregateOutputType | null
    _max: NFCRecordMaxAggregateOutputType | null
  }

  export type NFCRecordMinAggregateOutputType = {
    id: string | null
    certificateId: string | null
    identifier: string | null
    securityLevel: $Enums.VerificationSecurityLevel | null
    tamperStatus: $Enums.TamperStatus | null
    lastVerifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    slabId: string | null
  }

  export type NFCRecordMaxAggregateOutputType = {
    id: string | null
    certificateId: string | null
    identifier: string | null
    securityLevel: $Enums.VerificationSecurityLevel | null
    tamperStatus: $Enums.TamperStatus | null
    lastVerifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    slabId: string | null
  }

  export type NFCRecordCountAggregateOutputType = {
    id: number
    certificateId: number
    identifier: number
    securityLevel: number
    tamperStatus: number
    lastVerifiedAt: number
    createdAt: number
    updatedAt: number
    slabId: number
    _all: number
  }


  export type NFCRecordMinAggregateInputType = {
    id?: true
    certificateId?: true
    identifier?: true
    securityLevel?: true
    tamperStatus?: true
    lastVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
    slabId?: true
  }

  export type NFCRecordMaxAggregateInputType = {
    id?: true
    certificateId?: true
    identifier?: true
    securityLevel?: true
    tamperStatus?: true
    lastVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
    slabId?: true
  }

  export type NFCRecordCountAggregateInputType = {
    id?: true
    certificateId?: true
    identifier?: true
    securityLevel?: true
    tamperStatus?: true
    lastVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
    slabId?: true
    _all?: true
  }

  export type NFCRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NFCRecord to aggregate.
     */
    where?: NFCRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFCRecords to fetch.
     */
    orderBy?: NFCRecordOrderByWithRelationInput | NFCRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NFCRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFCRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFCRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NFCRecords
    **/
    _count?: true | NFCRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NFCRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NFCRecordMaxAggregateInputType
  }

  export type GetNFCRecordAggregateType<T extends NFCRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateNFCRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNFCRecord[P]>
      : GetScalarType<T[P], AggregateNFCRecord[P]>
  }




  export type NFCRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NFCRecordWhereInput
    orderBy?: NFCRecordOrderByWithAggregationInput | NFCRecordOrderByWithAggregationInput[]
    by: NFCRecordScalarFieldEnum[] | NFCRecordScalarFieldEnum
    having?: NFCRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NFCRecordCountAggregateInputType | true
    _min?: NFCRecordMinAggregateInputType
    _max?: NFCRecordMaxAggregateInputType
  }

  export type NFCRecordGroupByOutputType = {
    id: string
    certificateId: string
    identifier: string
    securityLevel: $Enums.VerificationSecurityLevel
    tamperStatus: $Enums.TamperStatus
    lastVerifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    slabId: string | null
    _count: NFCRecordCountAggregateOutputType | null
    _min: NFCRecordMinAggregateOutputType | null
    _max: NFCRecordMaxAggregateOutputType | null
  }

  type GetNFCRecordGroupByPayload<T extends NFCRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NFCRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NFCRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NFCRecordGroupByOutputType[P]>
            : GetScalarType<T[P], NFCRecordGroupByOutputType[P]>
        }
      >
    >


  export type NFCRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    identifier?: boolean
    securityLevel?: boolean
    tamperStatus?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slabId?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
    slab?: boolean | NFCRecord$slabArgs<ExtArgs>
  }, ExtArgs["result"]["nFCRecord"]>

  export type NFCRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    identifier?: boolean
    securityLevel?: boolean
    tamperStatus?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slabId?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
    slab?: boolean | NFCRecord$slabArgs<ExtArgs>
  }, ExtArgs["result"]["nFCRecord"]>

  export type NFCRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    identifier?: boolean
    securityLevel?: boolean
    tamperStatus?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slabId?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
    slab?: boolean | NFCRecord$slabArgs<ExtArgs>
  }, ExtArgs["result"]["nFCRecord"]>

  export type NFCRecordSelectScalar = {
    id?: boolean
    certificateId?: boolean
    identifier?: boolean
    securityLevel?: boolean
    tamperStatus?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slabId?: boolean
  }

  export type NFCRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "certificateId" | "identifier" | "securityLevel" | "tamperStatus" | "lastVerifiedAt" | "createdAt" | "updatedAt" | "slabId", ExtArgs["result"]["nFCRecord"]>
  export type NFCRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
    slab?: boolean | NFCRecord$slabArgs<ExtArgs>
  }
  export type NFCRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
    slab?: boolean | NFCRecord$slabArgs<ExtArgs>
  }
  export type NFCRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
    slab?: boolean | NFCRecord$slabArgs<ExtArgs>
  }

  export type $NFCRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NFCRecord"
    objects: {
      certificate: Prisma.$CertificatePayload<ExtArgs>
      slab: Prisma.$SlabPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      certificateId: string
      identifier: string
      securityLevel: $Enums.VerificationSecurityLevel
      tamperStatus: $Enums.TamperStatus
      lastVerifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
      slabId: string | null
    }, ExtArgs["result"]["nFCRecord"]>
    composites: {}
  }

  type NFCRecordGetPayload<S extends boolean | null | undefined | NFCRecordDefaultArgs> = $Result.GetResult<Prisma.$NFCRecordPayload, S>

  type NFCRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NFCRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NFCRecordCountAggregateInputType | true
    }

  export interface NFCRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NFCRecord'], meta: { name: 'NFCRecord' } }
    /**
     * Find zero or one NFCRecord that matches the filter.
     * @param {NFCRecordFindUniqueArgs} args - Arguments to find a NFCRecord
     * @example
     * // Get one NFCRecord
     * const nFCRecord = await prisma.nFCRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NFCRecordFindUniqueArgs>(args: SelectSubset<T, NFCRecordFindUniqueArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NFCRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NFCRecordFindUniqueOrThrowArgs} args - Arguments to find a NFCRecord
     * @example
     * // Get one NFCRecord
     * const nFCRecord = await prisma.nFCRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NFCRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, NFCRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NFCRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCRecordFindFirstArgs} args - Arguments to find a NFCRecord
     * @example
     * // Get one NFCRecord
     * const nFCRecord = await prisma.nFCRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NFCRecordFindFirstArgs>(args?: SelectSubset<T, NFCRecordFindFirstArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NFCRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCRecordFindFirstOrThrowArgs} args - Arguments to find a NFCRecord
     * @example
     * // Get one NFCRecord
     * const nFCRecord = await prisma.nFCRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NFCRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, NFCRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NFCRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NFCRecords
     * const nFCRecords = await prisma.nFCRecord.findMany()
     * 
     * // Get first 10 NFCRecords
     * const nFCRecords = await prisma.nFCRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nFCRecordWithIdOnly = await prisma.nFCRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NFCRecordFindManyArgs>(args?: SelectSubset<T, NFCRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NFCRecord.
     * @param {NFCRecordCreateArgs} args - Arguments to create a NFCRecord.
     * @example
     * // Create one NFCRecord
     * const NFCRecord = await prisma.nFCRecord.create({
     *   data: {
     *     // ... data to create a NFCRecord
     *   }
     * })
     * 
     */
    create<T extends NFCRecordCreateArgs>(args: SelectSubset<T, NFCRecordCreateArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NFCRecords.
     * @param {NFCRecordCreateManyArgs} args - Arguments to create many NFCRecords.
     * @example
     * // Create many NFCRecords
     * const nFCRecord = await prisma.nFCRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NFCRecordCreateManyArgs>(args?: SelectSubset<T, NFCRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NFCRecords and returns the data saved in the database.
     * @param {NFCRecordCreateManyAndReturnArgs} args - Arguments to create many NFCRecords.
     * @example
     * // Create many NFCRecords
     * const nFCRecord = await prisma.nFCRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NFCRecords and only return the `id`
     * const nFCRecordWithIdOnly = await prisma.nFCRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NFCRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, NFCRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NFCRecord.
     * @param {NFCRecordDeleteArgs} args - Arguments to delete one NFCRecord.
     * @example
     * // Delete one NFCRecord
     * const NFCRecord = await prisma.nFCRecord.delete({
     *   where: {
     *     // ... filter to delete one NFCRecord
     *   }
     * })
     * 
     */
    delete<T extends NFCRecordDeleteArgs>(args: SelectSubset<T, NFCRecordDeleteArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NFCRecord.
     * @param {NFCRecordUpdateArgs} args - Arguments to update one NFCRecord.
     * @example
     * // Update one NFCRecord
     * const nFCRecord = await prisma.nFCRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NFCRecordUpdateArgs>(args: SelectSubset<T, NFCRecordUpdateArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NFCRecords.
     * @param {NFCRecordDeleteManyArgs} args - Arguments to filter NFCRecords to delete.
     * @example
     * // Delete a few NFCRecords
     * const { count } = await prisma.nFCRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NFCRecordDeleteManyArgs>(args?: SelectSubset<T, NFCRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NFCRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NFCRecords
     * const nFCRecord = await prisma.nFCRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NFCRecordUpdateManyArgs>(args: SelectSubset<T, NFCRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NFCRecords and returns the data updated in the database.
     * @param {NFCRecordUpdateManyAndReturnArgs} args - Arguments to update many NFCRecords.
     * @example
     * // Update many NFCRecords
     * const nFCRecord = await prisma.nFCRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NFCRecords and only return the `id`
     * const nFCRecordWithIdOnly = await prisma.nFCRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NFCRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, NFCRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NFCRecord.
     * @param {NFCRecordUpsertArgs} args - Arguments to update or create a NFCRecord.
     * @example
     * // Update or create a NFCRecord
     * const nFCRecord = await prisma.nFCRecord.upsert({
     *   create: {
     *     // ... data to create a NFCRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NFCRecord we want to update
     *   }
     * })
     */
    upsert<T extends NFCRecordUpsertArgs>(args: SelectSubset<T, NFCRecordUpsertArgs<ExtArgs>>): Prisma__NFCRecordClient<$Result.GetResult<Prisma.$NFCRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NFCRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCRecordCountArgs} args - Arguments to filter NFCRecords to count.
     * @example
     * // Count the number of NFCRecords
     * const count = await prisma.nFCRecord.count({
     *   where: {
     *     // ... the filter for the NFCRecords we want to count
     *   }
     * })
    **/
    count<T extends NFCRecordCountArgs>(
      args?: Subset<T, NFCRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NFCRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NFCRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NFCRecordAggregateArgs>(args: Subset<T, NFCRecordAggregateArgs>): Prisma.PrismaPromise<GetNFCRecordAggregateType<T>>

    /**
     * Group by NFCRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NFCRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NFCRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NFCRecordGroupByArgs['orderBy'] }
        : { orderBy?: NFCRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NFCRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNFCRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NFCRecord model
   */
  readonly fields: NFCRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NFCRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NFCRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    certificate<T extends CertificateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CertificateDefaultArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slab<T extends NFCRecord$slabArgs<ExtArgs> = {}>(args?: Subset<T, NFCRecord$slabArgs<ExtArgs>>): Prisma__SlabClient<$Result.GetResult<Prisma.$SlabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NFCRecord model
   */
  interface NFCRecordFieldRefs {
    readonly id: FieldRef<"NFCRecord", 'String'>
    readonly certificateId: FieldRef<"NFCRecord", 'String'>
    readonly identifier: FieldRef<"NFCRecord", 'String'>
    readonly securityLevel: FieldRef<"NFCRecord", 'VerificationSecurityLevel'>
    readonly tamperStatus: FieldRef<"NFCRecord", 'TamperStatus'>
    readonly lastVerifiedAt: FieldRef<"NFCRecord", 'DateTime'>
    readonly createdAt: FieldRef<"NFCRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"NFCRecord", 'DateTime'>
    readonly slabId: FieldRef<"NFCRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NFCRecord findUnique
   */
  export type NFCRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * Filter, which NFCRecord to fetch.
     */
    where: NFCRecordWhereUniqueInput
  }

  /**
   * NFCRecord findUniqueOrThrow
   */
  export type NFCRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * Filter, which NFCRecord to fetch.
     */
    where: NFCRecordWhereUniqueInput
  }

  /**
   * NFCRecord findFirst
   */
  export type NFCRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * Filter, which NFCRecord to fetch.
     */
    where?: NFCRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFCRecords to fetch.
     */
    orderBy?: NFCRecordOrderByWithRelationInput | NFCRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NFCRecords.
     */
    cursor?: NFCRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFCRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFCRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NFCRecords.
     */
    distinct?: NFCRecordScalarFieldEnum | NFCRecordScalarFieldEnum[]
  }

  /**
   * NFCRecord findFirstOrThrow
   */
  export type NFCRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * Filter, which NFCRecord to fetch.
     */
    where?: NFCRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFCRecords to fetch.
     */
    orderBy?: NFCRecordOrderByWithRelationInput | NFCRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NFCRecords.
     */
    cursor?: NFCRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFCRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFCRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NFCRecords.
     */
    distinct?: NFCRecordScalarFieldEnum | NFCRecordScalarFieldEnum[]
  }

  /**
   * NFCRecord findMany
   */
  export type NFCRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * Filter, which NFCRecords to fetch.
     */
    where?: NFCRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NFCRecords to fetch.
     */
    orderBy?: NFCRecordOrderByWithRelationInput | NFCRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NFCRecords.
     */
    cursor?: NFCRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NFCRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NFCRecords.
     */
    skip?: number
    distinct?: NFCRecordScalarFieldEnum | NFCRecordScalarFieldEnum[]
  }

  /**
   * NFCRecord create
   */
  export type NFCRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a NFCRecord.
     */
    data: XOR<NFCRecordCreateInput, NFCRecordUncheckedCreateInput>
  }

  /**
   * NFCRecord createMany
   */
  export type NFCRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NFCRecords.
     */
    data: NFCRecordCreateManyInput | NFCRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NFCRecord createManyAndReturn
   */
  export type NFCRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * The data used to create many NFCRecords.
     */
    data: NFCRecordCreateManyInput | NFCRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NFCRecord update
   */
  export type NFCRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a NFCRecord.
     */
    data: XOR<NFCRecordUpdateInput, NFCRecordUncheckedUpdateInput>
    /**
     * Choose, which NFCRecord to update.
     */
    where: NFCRecordWhereUniqueInput
  }

  /**
   * NFCRecord updateMany
   */
  export type NFCRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NFCRecords.
     */
    data: XOR<NFCRecordUpdateManyMutationInput, NFCRecordUncheckedUpdateManyInput>
    /**
     * Filter which NFCRecords to update
     */
    where?: NFCRecordWhereInput
    /**
     * Limit how many NFCRecords to update.
     */
    limit?: number
  }

  /**
   * NFCRecord updateManyAndReturn
   */
  export type NFCRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * The data used to update NFCRecords.
     */
    data: XOR<NFCRecordUpdateManyMutationInput, NFCRecordUncheckedUpdateManyInput>
    /**
     * Filter which NFCRecords to update
     */
    where?: NFCRecordWhereInput
    /**
     * Limit how many NFCRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NFCRecord upsert
   */
  export type NFCRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the NFCRecord to update in case it exists.
     */
    where: NFCRecordWhereUniqueInput
    /**
     * In case the NFCRecord found by the `where` argument doesn't exist, create a new NFCRecord with this data.
     */
    create: XOR<NFCRecordCreateInput, NFCRecordUncheckedCreateInput>
    /**
     * In case the NFCRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NFCRecordUpdateInput, NFCRecordUncheckedUpdateInput>
  }

  /**
   * NFCRecord delete
   */
  export type NFCRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
    /**
     * Filter which NFCRecord to delete.
     */
    where: NFCRecordWhereUniqueInput
  }

  /**
   * NFCRecord deleteMany
   */
  export type NFCRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NFCRecords to delete
     */
    where?: NFCRecordWhereInput
    /**
     * Limit how many NFCRecords to delete.
     */
    limit?: number
  }

  /**
   * NFCRecord.slab
   */
  export type NFCRecord$slabArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slab
     */
    select?: SlabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Slab
     */
    omit?: SlabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlabInclude<ExtArgs> | null
    where?: SlabWhereInput
  }

  /**
   * NFCRecord without action
   */
  export type NFCRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NFCRecord
     */
    select?: NFCRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NFCRecord
     */
    omit?: NFCRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NFCRecordInclude<ExtArgs> | null
  }


  /**
   * Model QRRecord
   */

  export type AggregateQRRecord = {
    _count: QRRecordCountAggregateOutputType | null
    _avg: QRRecordAvgAggregateOutputType | null
    _sum: QRRecordSumAggregateOutputType | null
    _min: QRRecordMinAggregateOutputType | null
    _max: QRRecordMaxAggregateOutputType | null
  }

  export type QRRecordAvgAggregateOutputType = {
    scanCount: number | null
  }

  export type QRRecordSumAggregateOutputType = {
    scanCount: number | null
  }

  export type QRRecordMinAggregateOutputType = {
    id: string | null
    certificateId: string | null
    publicToken: string | null
    active: boolean | null
    scanCount: number | null
    lastVerifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QRRecordMaxAggregateOutputType = {
    id: string | null
    certificateId: string | null
    publicToken: string | null
    active: boolean | null
    scanCount: number | null
    lastVerifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QRRecordCountAggregateOutputType = {
    id: number
    certificateId: number
    publicToken: number
    active: number
    scanCount: number
    lastVerifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QRRecordAvgAggregateInputType = {
    scanCount?: true
  }

  export type QRRecordSumAggregateInputType = {
    scanCount?: true
  }

  export type QRRecordMinAggregateInputType = {
    id?: true
    certificateId?: true
    publicToken?: true
    active?: true
    scanCount?: true
    lastVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QRRecordMaxAggregateInputType = {
    id?: true
    certificateId?: true
    publicToken?: true
    active?: true
    scanCount?: true
    lastVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QRRecordCountAggregateInputType = {
    id?: true
    certificateId?: true
    publicToken?: true
    active?: true
    scanCount?: true
    lastVerifiedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QRRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRRecord to aggregate.
     */
    where?: QRRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRRecords to fetch.
     */
    orderBy?: QRRecordOrderByWithRelationInput | QRRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QRRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QRRecords
    **/
    _count?: true | QRRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QRRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QRRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QRRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QRRecordMaxAggregateInputType
  }

  export type GetQRRecordAggregateType<T extends QRRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateQRRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQRRecord[P]>
      : GetScalarType<T[P], AggregateQRRecord[P]>
  }




  export type QRRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QRRecordWhereInput
    orderBy?: QRRecordOrderByWithAggregationInput | QRRecordOrderByWithAggregationInput[]
    by: QRRecordScalarFieldEnum[] | QRRecordScalarFieldEnum
    having?: QRRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QRRecordCountAggregateInputType | true
    _avg?: QRRecordAvgAggregateInputType
    _sum?: QRRecordSumAggregateInputType
    _min?: QRRecordMinAggregateInputType
    _max?: QRRecordMaxAggregateInputType
  }

  export type QRRecordGroupByOutputType = {
    id: string
    certificateId: string
    publicToken: string
    active: boolean
    scanCount: number
    lastVerifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: QRRecordCountAggregateOutputType | null
    _avg: QRRecordAvgAggregateOutputType | null
    _sum: QRRecordSumAggregateOutputType | null
    _min: QRRecordMinAggregateOutputType | null
    _max: QRRecordMaxAggregateOutputType | null
  }

  type GetQRRecordGroupByPayload<T extends QRRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QRRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QRRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QRRecordGroupByOutputType[P]>
            : GetScalarType<T[P], QRRecordGroupByOutputType[P]>
        }
      >
    >


  export type QRRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    publicToken?: boolean
    active?: boolean
    scanCount?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRRecord"]>

  export type QRRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    publicToken?: boolean
    active?: boolean
    scanCount?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRRecord"]>

  export type QRRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    certificateId?: boolean
    publicToken?: boolean
    active?: boolean
    scanCount?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["qRRecord"]>

  export type QRRecordSelectScalar = {
    id?: boolean
    certificateId?: boolean
    publicToken?: boolean
    active?: boolean
    scanCount?: boolean
    lastVerifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QRRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "certificateId" | "publicToken" | "active" | "scanCount" | "lastVerifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["qRRecord"]>
  export type QRRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }
  export type QRRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }
  export type QRRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificate?: boolean | CertificateDefaultArgs<ExtArgs>
  }

  export type $QRRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QRRecord"
    objects: {
      certificate: Prisma.$CertificatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      certificateId: string
      publicToken: string
      active: boolean
      scanCount: number
      lastVerifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["qRRecord"]>
    composites: {}
  }

  type QRRecordGetPayload<S extends boolean | null | undefined | QRRecordDefaultArgs> = $Result.GetResult<Prisma.$QRRecordPayload, S>

  type QRRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QRRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QRRecordCountAggregateInputType | true
    }

  export interface QRRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QRRecord'], meta: { name: 'QRRecord' } }
    /**
     * Find zero or one QRRecord that matches the filter.
     * @param {QRRecordFindUniqueArgs} args - Arguments to find a QRRecord
     * @example
     * // Get one QRRecord
     * const qRRecord = await prisma.qRRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QRRecordFindUniqueArgs>(args: SelectSubset<T, QRRecordFindUniqueArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QRRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QRRecordFindUniqueOrThrowArgs} args - Arguments to find a QRRecord
     * @example
     * // Get one QRRecord
     * const qRRecord = await prisma.qRRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QRRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, QRRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRRecordFindFirstArgs} args - Arguments to find a QRRecord
     * @example
     * // Get one QRRecord
     * const qRRecord = await prisma.qRRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QRRecordFindFirstArgs>(args?: SelectSubset<T, QRRecordFindFirstArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QRRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRRecordFindFirstOrThrowArgs} args - Arguments to find a QRRecord
     * @example
     * // Get one QRRecord
     * const qRRecord = await prisma.qRRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QRRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, QRRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QRRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QRRecords
     * const qRRecords = await prisma.qRRecord.findMany()
     * 
     * // Get first 10 QRRecords
     * const qRRecords = await prisma.qRRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qRRecordWithIdOnly = await prisma.qRRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QRRecordFindManyArgs>(args?: SelectSubset<T, QRRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QRRecord.
     * @param {QRRecordCreateArgs} args - Arguments to create a QRRecord.
     * @example
     * // Create one QRRecord
     * const QRRecord = await prisma.qRRecord.create({
     *   data: {
     *     // ... data to create a QRRecord
     *   }
     * })
     * 
     */
    create<T extends QRRecordCreateArgs>(args: SelectSubset<T, QRRecordCreateArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QRRecords.
     * @param {QRRecordCreateManyArgs} args - Arguments to create many QRRecords.
     * @example
     * // Create many QRRecords
     * const qRRecord = await prisma.qRRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QRRecordCreateManyArgs>(args?: SelectSubset<T, QRRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QRRecords and returns the data saved in the database.
     * @param {QRRecordCreateManyAndReturnArgs} args - Arguments to create many QRRecords.
     * @example
     * // Create many QRRecords
     * const qRRecord = await prisma.qRRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QRRecords and only return the `id`
     * const qRRecordWithIdOnly = await prisma.qRRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QRRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, QRRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QRRecord.
     * @param {QRRecordDeleteArgs} args - Arguments to delete one QRRecord.
     * @example
     * // Delete one QRRecord
     * const QRRecord = await prisma.qRRecord.delete({
     *   where: {
     *     // ... filter to delete one QRRecord
     *   }
     * })
     * 
     */
    delete<T extends QRRecordDeleteArgs>(args: SelectSubset<T, QRRecordDeleteArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QRRecord.
     * @param {QRRecordUpdateArgs} args - Arguments to update one QRRecord.
     * @example
     * // Update one QRRecord
     * const qRRecord = await prisma.qRRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QRRecordUpdateArgs>(args: SelectSubset<T, QRRecordUpdateArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QRRecords.
     * @param {QRRecordDeleteManyArgs} args - Arguments to filter QRRecords to delete.
     * @example
     * // Delete a few QRRecords
     * const { count } = await prisma.qRRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QRRecordDeleteManyArgs>(args?: SelectSubset<T, QRRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QRRecords
     * const qRRecord = await prisma.qRRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QRRecordUpdateManyArgs>(args: SelectSubset<T, QRRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QRRecords and returns the data updated in the database.
     * @param {QRRecordUpdateManyAndReturnArgs} args - Arguments to update many QRRecords.
     * @example
     * // Update many QRRecords
     * const qRRecord = await prisma.qRRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QRRecords and only return the `id`
     * const qRRecordWithIdOnly = await prisma.qRRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QRRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, QRRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QRRecord.
     * @param {QRRecordUpsertArgs} args - Arguments to update or create a QRRecord.
     * @example
     * // Update or create a QRRecord
     * const qRRecord = await prisma.qRRecord.upsert({
     *   create: {
     *     // ... data to create a QRRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QRRecord we want to update
     *   }
     * })
     */
    upsert<T extends QRRecordUpsertArgs>(args: SelectSubset<T, QRRecordUpsertArgs<ExtArgs>>): Prisma__QRRecordClient<$Result.GetResult<Prisma.$QRRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QRRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRRecordCountArgs} args - Arguments to filter QRRecords to count.
     * @example
     * // Count the number of QRRecords
     * const count = await prisma.qRRecord.count({
     *   where: {
     *     // ... the filter for the QRRecords we want to count
     *   }
     * })
    **/
    count<T extends QRRecordCountArgs>(
      args?: Subset<T, QRRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QRRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QRRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QRRecordAggregateArgs>(args: Subset<T, QRRecordAggregateArgs>): Prisma.PrismaPromise<GetQRRecordAggregateType<T>>

    /**
     * Group by QRRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QRRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QRRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QRRecordGroupByArgs['orderBy'] }
        : { orderBy?: QRRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QRRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQRRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QRRecord model
   */
  readonly fields: QRRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QRRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QRRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    certificate<T extends CertificateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CertificateDefaultArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QRRecord model
   */
  interface QRRecordFieldRefs {
    readonly id: FieldRef<"QRRecord", 'String'>
    readonly certificateId: FieldRef<"QRRecord", 'String'>
    readonly publicToken: FieldRef<"QRRecord", 'String'>
    readonly active: FieldRef<"QRRecord", 'Boolean'>
    readonly scanCount: FieldRef<"QRRecord", 'Int'>
    readonly lastVerifiedAt: FieldRef<"QRRecord", 'DateTime'>
    readonly createdAt: FieldRef<"QRRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"QRRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QRRecord findUnique
   */
  export type QRRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * Filter, which QRRecord to fetch.
     */
    where: QRRecordWhereUniqueInput
  }

  /**
   * QRRecord findUniqueOrThrow
   */
  export type QRRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * Filter, which QRRecord to fetch.
     */
    where: QRRecordWhereUniqueInput
  }

  /**
   * QRRecord findFirst
   */
  export type QRRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * Filter, which QRRecord to fetch.
     */
    where?: QRRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRRecords to fetch.
     */
    orderBy?: QRRecordOrderByWithRelationInput | QRRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRRecords.
     */
    cursor?: QRRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRRecords.
     */
    distinct?: QRRecordScalarFieldEnum | QRRecordScalarFieldEnum[]
  }

  /**
   * QRRecord findFirstOrThrow
   */
  export type QRRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * Filter, which QRRecord to fetch.
     */
    where?: QRRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRRecords to fetch.
     */
    orderBy?: QRRecordOrderByWithRelationInput | QRRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QRRecords.
     */
    cursor?: QRRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QRRecords.
     */
    distinct?: QRRecordScalarFieldEnum | QRRecordScalarFieldEnum[]
  }

  /**
   * QRRecord findMany
   */
  export type QRRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * Filter, which QRRecords to fetch.
     */
    where?: QRRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QRRecords to fetch.
     */
    orderBy?: QRRecordOrderByWithRelationInput | QRRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QRRecords.
     */
    cursor?: QRRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QRRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QRRecords.
     */
    skip?: number
    distinct?: QRRecordScalarFieldEnum | QRRecordScalarFieldEnum[]
  }

  /**
   * QRRecord create
   */
  export type QRRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a QRRecord.
     */
    data: XOR<QRRecordCreateInput, QRRecordUncheckedCreateInput>
  }

  /**
   * QRRecord createMany
   */
  export type QRRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QRRecords.
     */
    data: QRRecordCreateManyInput | QRRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QRRecord createManyAndReturn
   */
  export type QRRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * The data used to create many QRRecords.
     */
    data: QRRecordCreateManyInput | QRRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRRecord update
   */
  export type QRRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a QRRecord.
     */
    data: XOR<QRRecordUpdateInput, QRRecordUncheckedUpdateInput>
    /**
     * Choose, which QRRecord to update.
     */
    where: QRRecordWhereUniqueInput
  }

  /**
   * QRRecord updateMany
   */
  export type QRRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QRRecords.
     */
    data: XOR<QRRecordUpdateManyMutationInput, QRRecordUncheckedUpdateManyInput>
    /**
     * Filter which QRRecords to update
     */
    where?: QRRecordWhereInput
    /**
     * Limit how many QRRecords to update.
     */
    limit?: number
  }

  /**
   * QRRecord updateManyAndReturn
   */
  export type QRRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * The data used to update QRRecords.
     */
    data: XOR<QRRecordUpdateManyMutationInput, QRRecordUncheckedUpdateManyInput>
    /**
     * Filter which QRRecords to update
     */
    where?: QRRecordWhereInput
    /**
     * Limit how many QRRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QRRecord upsert
   */
  export type QRRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the QRRecord to update in case it exists.
     */
    where: QRRecordWhereUniqueInput
    /**
     * In case the QRRecord found by the `where` argument doesn't exist, create a new QRRecord with this data.
     */
    create: XOR<QRRecordCreateInput, QRRecordUncheckedCreateInput>
    /**
     * In case the QRRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QRRecordUpdateInput, QRRecordUncheckedUpdateInput>
  }

  /**
   * QRRecord delete
   */
  export type QRRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
    /**
     * Filter which QRRecord to delete.
     */
    where: QRRecordWhereUniqueInput
  }

  /**
   * QRRecord deleteMany
   */
  export type QRRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QRRecords to delete
     */
    where?: QRRecordWhereInput
    /**
     * Limit how many QRRecords to delete.
     */
    limit?: number
  }

  /**
   * QRRecord without action
   */
  export type QRRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QRRecord
     */
    select?: QRRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QRRecord
     */
    omit?: QRRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QRRecordInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    entityType: number
    entityId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entityType?: true
    entityId?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    entityType?: true
    entityId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorId: string | null
    action: string
    entityType: string
    entityId: string
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "action" | "entityType" | "entityId" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actor?: boolean | AuditLog$actorArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string | null
      action: string
      entityType: string
      entityId: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actor<T extends AuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.actor
   */
  export type AuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    displayName: 'displayName',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const CardSetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brand: 'brand',
    year: 'year',
    createdAt: 'createdAt'
  };

  export type CardSetScalarFieldEnum = (typeof CardSetScalarFieldEnum)[keyof typeof CardSetScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    setId: 'setId',
    name: 'name',
    collectorNo: 'collectorNo',
    variant: 'variant',
    language: 'language',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cardId: 'cardId',
    status: 'status',
    submittedAt: 'submittedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const GradingReportScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    methodologyVersion: 'methodologyVersion',
    centering: 'centering',
    corners: 'corners',
    edges: 'edges',
    surface: 'surface',
    printQuality: 'printQuality',
    whitening: 'whitening',
    defects: 'defects',
    proposedGrade: 'proposedGrade',
    humanGrade: 'humanGrade',
    finalizedAt: 'finalizedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GradingReportScalarFieldEnum = (typeof GradingReportScalarFieldEnum)[keyof typeof GradingReportScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    gradingReportId: 'gradingReportId',
    certificateNo: 'certificateNo',
    serialNo: 'serialNo',
    status: 'status',
    finalGrade: 'finalGrade',
    graderId: 'graderId',
    verificationHash: 'verificationHash',
    certifiedAt: 'certifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const SlabScalarFieldEnum: {
    id: 'id',
    certificateId: 'certificateId',
    status: 'status',
    model: 'model',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SlabScalarFieldEnum = (typeof SlabScalarFieldEnum)[keyof typeof SlabScalarFieldEnum]


  export const NFCRecordScalarFieldEnum: {
    id: 'id',
    certificateId: 'certificateId',
    identifier: 'identifier',
    securityLevel: 'securityLevel',
    tamperStatus: 'tamperStatus',
    lastVerifiedAt: 'lastVerifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    slabId: 'slabId'
  };

  export type NFCRecordScalarFieldEnum = (typeof NFCRecordScalarFieldEnum)[keyof typeof NFCRecordScalarFieldEnum]


  export const QRRecordScalarFieldEnum: {
    id: 'id',
    certificateId: 'certificateId',
    publicToken: 'publicToken',
    active: 'active',
    scanCount: 'scanCount',
    lastVerifiedAt: 'lastVerifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QRRecordScalarFieldEnum = (typeof QRRecordScalarFieldEnum)[keyof typeof QRRecordScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SubmissionStatus'
   */
  export type EnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus'>
    


  /**
   * Reference to a field of type 'SubmissionStatus[]'
   */
  export type ListEnumSubmissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubmissionStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'CertificateStatus'
   */
  export type EnumCertificateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertificateStatus'>
    


  /**
   * Reference to a field of type 'CertificateStatus[]'
   */
  export type ListEnumCertificateStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CertificateStatus[]'>
    


  /**
   * Reference to a field of type 'SlabStatus'
   */
  export type EnumSlabStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlabStatus'>
    


  /**
   * Reference to a field of type 'SlabStatus[]'
   */
  export type ListEnumSlabStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlabStatus[]'>
    


  /**
   * Reference to a field of type 'VerificationSecurityLevel'
   */
  export type EnumVerificationSecurityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationSecurityLevel'>
    


  /**
   * Reference to a field of type 'VerificationSecurityLevel[]'
   */
  export type ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationSecurityLevel[]'>
    


  /**
   * Reference to a field of type 'TamperStatus'
   */
  export type EnumTamperStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TamperStatus'>
    


  /**
   * Reference to a field of type 'TamperStatus[]'
   */
  export type ListEnumTamperStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TamperStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    submissions?: SubmissionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    certificates?: CertificateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    certificates?: CertificateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    submissions?: SubmissionListRelationFilter
    auditLogs?: AuditLogListRelationFilter
    certificates?: CertificateListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    tokenHash?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type CardSetWhereInput = {
    AND?: CardSetWhereInput | CardSetWhereInput[]
    OR?: CardSetWhereInput[]
    NOT?: CardSetWhereInput | CardSetWhereInput[]
    id?: StringFilter<"CardSet"> | string
    name?: StringFilter<"CardSet"> | string
    brand?: StringFilter<"CardSet"> | string
    year?: IntNullableFilter<"CardSet"> | number | null
    createdAt?: DateTimeFilter<"CardSet"> | Date | string
    cards?: CardListRelationFilter
  }

  export type CardSetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cards?: CardOrderByRelationAggregateInput
  }

  export type CardSetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    brand_name_year?: CardSetBrandNameYearCompoundUniqueInput
    AND?: CardSetWhereInput | CardSetWhereInput[]
    OR?: CardSetWhereInput[]
    NOT?: CardSetWhereInput | CardSetWhereInput[]
    name?: StringFilter<"CardSet"> | string
    brand?: StringFilter<"CardSet"> | string
    year?: IntNullableFilter<"CardSet"> | number | null
    createdAt?: DateTimeFilter<"CardSet"> | Date | string
    cards?: CardListRelationFilter
  }, "id" | "brand_name_year">

  export type CardSetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    year?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CardSetCountOrderByAggregateInput
    _avg?: CardSetAvgOrderByAggregateInput
    _max?: CardSetMaxOrderByAggregateInput
    _min?: CardSetMinOrderByAggregateInput
    _sum?: CardSetSumOrderByAggregateInput
  }

  export type CardSetScalarWhereWithAggregatesInput = {
    AND?: CardSetScalarWhereWithAggregatesInput | CardSetScalarWhereWithAggregatesInput[]
    OR?: CardSetScalarWhereWithAggregatesInput[]
    NOT?: CardSetScalarWhereWithAggregatesInput | CardSetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CardSet"> | string
    name?: StringWithAggregatesFilter<"CardSet"> | string
    brand?: StringWithAggregatesFilter<"CardSet"> | string
    year?: IntNullableWithAggregatesFilter<"CardSet"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CardSet"> | Date | string
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    setId?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    collectorNo?: StringNullableFilter<"Card"> | string | null
    variant?: StringNullableFilter<"Card"> | string | null
    language?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    set?: XOR<CardSetScalarRelationFilter, CardSetWhereInput>
    submissions?: SubmissionListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    setId?: SortOrder
    name?: SortOrder
    collectorNo?: SortOrderInput | SortOrder
    variant?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    set?: CardSetOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    setId?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    collectorNo?: StringNullableFilter<"Card"> | string | null
    variant?: StringNullableFilter<"Card"> | string | null
    language?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    set?: XOR<CardSetScalarRelationFilter, CardSetWhereInput>
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    setId?: SortOrder
    name?: SortOrder
    collectorNo?: SortOrderInput | SortOrder
    variant?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    setId?: StringWithAggregatesFilter<"Card"> | string
    name?: StringWithAggregatesFilter<"Card"> | string
    collectorNo?: StringNullableWithAggregatesFilter<"Card"> | string | null
    variant?: StringNullableWithAggregatesFilter<"Card"> | string | null
    language?: StringNullableWithAggregatesFilter<"Card"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    cardId?: StringNullableFilter<"Submission"> | string | null
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    submittedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    card?: XOR<CardNullableScalarRelationFilter, CardWhereInput> | null
    gradingReports?: GradingReportListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    card?: CardOrderByWithRelationInput
    gradingReports?: GradingReportOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    cardId?: StringNullableFilter<"Submission"> | string | null
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    submittedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    card?: XOR<CardNullableScalarRelationFilter, CardWhereInput> | null
    gradingReports?: GradingReportListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrderInput | SortOrder
    status?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    cardId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: EnumSubmissionStatusWithAggregatesFilter<"Submission"> | $Enums.SubmissionStatus
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type GradingReportWhereInput = {
    AND?: GradingReportWhereInput | GradingReportWhereInput[]
    OR?: GradingReportWhereInput[]
    NOT?: GradingReportWhereInput | GradingReportWhereInput[]
    id?: StringFilter<"GradingReport"> | string
    submissionId?: StringFilter<"GradingReport"> | string
    methodologyVersion?: StringFilter<"GradingReport"> | string
    centering?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    corners?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    edges?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    surface?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    printQuality?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    whitening?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    defects?: JsonNullableFilter<"GradingReport">
    proposedGrade?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    humanGrade?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: DateTimeNullableFilter<"GradingReport"> | Date | string | null
    createdAt?: DateTimeFilter<"GradingReport"> | Date | string
    updatedAt?: DateTimeFilter<"GradingReport"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    certificate?: XOR<CertificateNullableScalarRelationFilter, CertificateWhereInput> | null
  }

  export type GradingReportOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    methodologyVersion?: SortOrder
    centering?: SortOrderInput | SortOrder
    corners?: SortOrderInput | SortOrder
    edges?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    printQuality?: SortOrderInput | SortOrder
    whitening?: SortOrderInput | SortOrder
    defects?: SortOrderInput | SortOrder
    proposedGrade?: SortOrderInput | SortOrder
    humanGrade?: SortOrderInput | SortOrder
    finalizedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
    certificate?: CertificateOrderByWithRelationInput
  }

  export type GradingReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GradingReportWhereInput | GradingReportWhereInput[]
    OR?: GradingReportWhereInput[]
    NOT?: GradingReportWhereInput | GradingReportWhereInput[]
    submissionId?: StringFilter<"GradingReport"> | string
    methodologyVersion?: StringFilter<"GradingReport"> | string
    centering?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    corners?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    edges?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    surface?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    printQuality?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    whitening?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    defects?: JsonNullableFilter<"GradingReport">
    proposedGrade?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    humanGrade?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: DateTimeNullableFilter<"GradingReport"> | Date | string | null
    createdAt?: DateTimeFilter<"GradingReport"> | Date | string
    updatedAt?: DateTimeFilter<"GradingReport"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
    certificate?: XOR<CertificateNullableScalarRelationFilter, CertificateWhereInput> | null
  }, "id">

  export type GradingReportOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    methodologyVersion?: SortOrder
    centering?: SortOrderInput | SortOrder
    corners?: SortOrderInput | SortOrder
    edges?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    printQuality?: SortOrderInput | SortOrder
    whitening?: SortOrderInput | SortOrder
    defects?: SortOrderInput | SortOrder
    proposedGrade?: SortOrderInput | SortOrder
    humanGrade?: SortOrderInput | SortOrder
    finalizedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GradingReportCountOrderByAggregateInput
    _avg?: GradingReportAvgOrderByAggregateInput
    _max?: GradingReportMaxOrderByAggregateInput
    _min?: GradingReportMinOrderByAggregateInput
    _sum?: GradingReportSumOrderByAggregateInput
  }

  export type GradingReportScalarWhereWithAggregatesInput = {
    AND?: GradingReportScalarWhereWithAggregatesInput | GradingReportScalarWhereWithAggregatesInput[]
    OR?: GradingReportScalarWhereWithAggregatesInput[]
    NOT?: GradingReportScalarWhereWithAggregatesInput | GradingReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GradingReport"> | string
    submissionId?: StringWithAggregatesFilter<"GradingReport"> | string
    methodologyVersion?: StringWithAggregatesFilter<"GradingReport"> | string
    centering?: DecimalNullableWithAggregatesFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    corners?: DecimalNullableWithAggregatesFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    edges?: DecimalNullableWithAggregatesFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    surface?: DecimalNullableWithAggregatesFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    printQuality?: DecimalNullableWithAggregatesFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    whitening?: DecimalNullableWithAggregatesFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    defects?: JsonNullableWithAggregatesFilter<"GradingReport">
    proposedGrade?: DecimalNullableWithAggregatesFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    humanGrade?: DecimalNullableWithAggregatesFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: DateTimeNullableWithAggregatesFilter<"GradingReport"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GradingReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GradingReport"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    gradingReportId?: StringFilter<"Certificate"> | string
    certificateNo?: StringFilter<"Certificate"> | string
    serialNo?: StringFilter<"Certificate"> | string
    status?: EnumCertificateStatusFilter<"Certificate"> | $Enums.CertificateStatus
    finalGrade?: DecimalNullableFilter<"Certificate"> | Decimal | DecimalJsLike | number | string | null
    graderId?: StringNullableFilter<"Certificate"> | string | null
    verificationHash?: StringNullableFilter<"Certificate"> | string | null
    certifiedAt?: DateTimeNullableFilter<"Certificate"> | Date | string | null
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    gradingReport?: XOR<GradingReportScalarRelationFilter, GradingReportWhereInput>
    grader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    slab?: XOR<SlabNullableScalarRelationFilter, SlabWhereInput> | null
    nfcRecord?: XOR<NFCRecordNullableScalarRelationFilter, NFCRecordWhereInput> | null
    qrRecord?: XOR<QRRecordNullableScalarRelationFilter, QRRecordWhereInput> | null
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    gradingReportId?: SortOrder
    certificateNo?: SortOrder
    serialNo?: SortOrder
    status?: SortOrder
    finalGrade?: SortOrderInput | SortOrder
    graderId?: SortOrderInput | SortOrder
    verificationHash?: SortOrderInput | SortOrder
    certifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gradingReport?: GradingReportOrderByWithRelationInput
    grader?: UserOrderByWithRelationInput
    slab?: SlabOrderByWithRelationInput
    nfcRecord?: NFCRecordOrderByWithRelationInput
    qrRecord?: QRRecordOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gradingReportId?: string
    certificateNo?: string
    serialNo?: string
    verificationHash?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    status?: EnumCertificateStatusFilter<"Certificate"> | $Enums.CertificateStatus
    finalGrade?: DecimalNullableFilter<"Certificate"> | Decimal | DecimalJsLike | number | string | null
    graderId?: StringNullableFilter<"Certificate"> | string | null
    certifiedAt?: DateTimeNullableFilter<"Certificate"> | Date | string | null
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
    gradingReport?: XOR<GradingReportScalarRelationFilter, GradingReportWhereInput>
    grader?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    slab?: XOR<SlabNullableScalarRelationFilter, SlabWhereInput> | null
    nfcRecord?: XOR<NFCRecordNullableScalarRelationFilter, NFCRecordWhereInput> | null
    qrRecord?: XOR<QRRecordNullableScalarRelationFilter, QRRecordWhereInput> | null
  }, "id" | "gradingReportId" | "certificateNo" | "serialNo" | "verificationHash">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    gradingReportId?: SortOrder
    certificateNo?: SortOrder
    serialNo?: SortOrder
    status?: SortOrder
    finalGrade?: SortOrderInput | SortOrder
    graderId?: SortOrderInput | SortOrder
    verificationHash?: SortOrderInput | SortOrder
    certifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _avg?: CertificateAvgOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
    _sum?: CertificateSumOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    gradingReportId?: StringWithAggregatesFilter<"Certificate"> | string
    certificateNo?: StringWithAggregatesFilter<"Certificate"> | string
    serialNo?: StringWithAggregatesFilter<"Certificate"> | string
    status?: EnumCertificateStatusWithAggregatesFilter<"Certificate"> | $Enums.CertificateStatus
    finalGrade?: DecimalNullableWithAggregatesFilter<"Certificate"> | Decimal | DecimalJsLike | number | string | null
    graderId?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    verificationHash?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    certifiedAt?: DateTimeNullableWithAggregatesFilter<"Certificate"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type SlabWhereInput = {
    AND?: SlabWhereInput | SlabWhereInput[]
    OR?: SlabWhereInput[]
    NOT?: SlabWhereInput | SlabWhereInput[]
    id?: StringFilter<"Slab"> | string
    certificateId?: StringFilter<"Slab"> | string
    status?: EnumSlabStatusFilter<"Slab"> | $Enums.SlabStatus
    model?: StringNullableFilter<"Slab"> | string | null
    createdAt?: DateTimeFilter<"Slab"> | Date | string
    updatedAt?: DateTimeFilter<"Slab"> | Date | string
    certificate?: XOR<CertificateScalarRelationFilter, CertificateWhereInput>
    nfcRecord?: XOR<NFCRecordNullableScalarRelationFilter, NFCRecordWhereInput> | null
  }

  export type SlabOrderByWithRelationInput = {
    id?: SortOrder
    certificateId?: SortOrder
    status?: SortOrder
    model?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificate?: CertificateOrderByWithRelationInput
    nfcRecord?: NFCRecordOrderByWithRelationInput
  }

  export type SlabWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    certificateId?: string
    AND?: SlabWhereInput | SlabWhereInput[]
    OR?: SlabWhereInput[]
    NOT?: SlabWhereInput | SlabWhereInput[]
    status?: EnumSlabStatusFilter<"Slab"> | $Enums.SlabStatus
    model?: StringNullableFilter<"Slab"> | string | null
    createdAt?: DateTimeFilter<"Slab"> | Date | string
    updatedAt?: DateTimeFilter<"Slab"> | Date | string
    certificate?: XOR<CertificateScalarRelationFilter, CertificateWhereInput>
    nfcRecord?: XOR<NFCRecordNullableScalarRelationFilter, NFCRecordWhereInput> | null
  }, "id" | "certificateId">

  export type SlabOrderByWithAggregationInput = {
    id?: SortOrder
    certificateId?: SortOrder
    status?: SortOrder
    model?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SlabCountOrderByAggregateInput
    _max?: SlabMaxOrderByAggregateInput
    _min?: SlabMinOrderByAggregateInput
  }

  export type SlabScalarWhereWithAggregatesInput = {
    AND?: SlabScalarWhereWithAggregatesInput | SlabScalarWhereWithAggregatesInput[]
    OR?: SlabScalarWhereWithAggregatesInput[]
    NOT?: SlabScalarWhereWithAggregatesInput | SlabScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Slab"> | string
    certificateId?: StringWithAggregatesFilter<"Slab"> | string
    status?: EnumSlabStatusWithAggregatesFilter<"Slab"> | $Enums.SlabStatus
    model?: StringNullableWithAggregatesFilter<"Slab"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Slab"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Slab"> | Date | string
  }

  export type NFCRecordWhereInput = {
    AND?: NFCRecordWhereInput | NFCRecordWhereInput[]
    OR?: NFCRecordWhereInput[]
    NOT?: NFCRecordWhereInput | NFCRecordWhereInput[]
    id?: StringFilter<"NFCRecord"> | string
    certificateId?: StringFilter<"NFCRecord"> | string
    identifier?: StringFilter<"NFCRecord"> | string
    securityLevel?: EnumVerificationSecurityLevelFilter<"NFCRecord"> | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFilter<"NFCRecord"> | $Enums.TamperStatus
    lastVerifiedAt?: DateTimeNullableFilter<"NFCRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"NFCRecord"> | Date | string
    updatedAt?: DateTimeFilter<"NFCRecord"> | Date | string
    slabId?: StringNullableFilter<"NFCRecord"> | string | null
    certificate?: XOR<CertificateScalarRelationFilter, CertificateWhereInput>
    slab?: XOR<SlabNullableScalarRelationFilter, SlabWhereInput> | null
  }

  export type NFCRecordOrderByWithRelationInput = {
    id?: SortOrder
    certificateId?: SortOrder
    identifier?: SortOrder
    securityLevel?: SortOrder
    tamperStatus?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slabId?: SortOrderInput | SortOrder
    certificate?: CertificateOrderByWithRelationInput
    slab?: SlabOrderByWithRelationInput
  }

  export type NFCRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    certificateId?: string
    identifier?: string
    slabId?: string
    AND?: NFCRecordWhereInput | NFCRecordWhereInput[]
    OR?: NFCRecordWhereInput[]
    NOT?: NFCRecordWhereInput | NFCRecordWhereInput[]
    securityLevel?: EnumVerificationSecurityLevelFilter<"NFCRecord"> | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFilter<"NFCRecord"> | $Enums.TamperStatus
    lastVerifiedAt?: DateTimeNullableFilter<"NFCRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"NFCRecord"> | Date | string
    updatedAt?: DateTimeFilter<"NFCRecord"> | Date | string
    certificate?: XOR<CertificateScalarRelationFilter, CertificateWhereInput>
    slab?: XOR<SlabNullableScalarRelationFilter, SlabWhereInput> | null
  }, "id" | "certificateId" | "identifier" | "slabId">

  export type NFCRecordOrderByWithAggregationInput = {
    id?: SortOrder
    certificateId?: SortOrder
    identifier?: SortOrder
    securityLevel?: SortOrder
    tamperStatus?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slabId?: SortOrderInput | SortOrder
    _count?: NFCRecordCountOrderByAggregateInput
    _max?: NFCRecordMaxOrderByAggregateInput
    _min?: NFCRecordMinOrderByAggregateInput
  }

  export type NFCRecordScalarWhereWithAggregatesInput = {
    AND?: NFCRecordScalarWhereWithAggregatesInput | NFCRecordScalarWhereWithAggregatesInput[]
    OR?: NFCRecordScalarWhereWithAggregatesInput[]
    NOT?: NFCRecordScalarWhereWithAggregatesInput | NFCRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NFCRecord"> | string
    certificateId?: StringWithAggregatesFilter<"NFCRecord"> | string
    identifier?: StringWithAggregatesFilter<"NFCRecord"> | string
    securityLevel?: EnumVerificationSecurityLevelWithAggregatesFilter<"NFCRecord"> | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusWithAggregatesFilter<"NFCRecord"> | $Enums.TamperStatus
    lastVerifiedAt?: DateTimeNullableWithAggregatesFilter<"NFCRecord"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NFCRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NFCRecord"> | Date | string
    slabId?: StringNullableWithAggregatesFilter<"NFCRecord"> | string | null
  }

  export type QRRecordWhereInput = {
    AND?: QRRecordWhereInput | QRRecordWhereInput[]
    OR?: QRRecordWhereInput[]
    NOT?: QRRecordWhereInput | QRRecordWhereInput[]
    id?: StringFilter<"QRRecord"> | string
    certificateId?: StringFilter<"QRRecord"> | string
    publicToken?: StringFilter<"QRRecord"> | string
    active?: BoolFilter<"QRRecord"> | boolean
    scanCount?: IntFilter<"QRRecord"> | number
    lastVerifiedAt?: DateTimeNullableFilter<"QRRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"QRRecord"> | Date | string
    updatedAt?: DateTimeFilter<"QRRecord"> | Date | string
    certificate?: XOR<CertificateScalarRelationFilter, CertificateWhereInput>
  }

  export type QRRecordOrderByWithRelationInput = {
    id?: SortOrder
    certificateId?: SortOrder
    publicToken?: SortOrder
    active?: SortOrder
    scanCount?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    certificate?: CertificateOrderByWithRelationInput
  }

  export type QRRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    certificateId?: string
    publicToken?: string
    AND?: QRRecordWhereInput | QRRecordWhereInput[]
    OR?: QRRecordWhereInput[]
    NOT?: QRRecordWhereInput | QRRecordWhereInput[]
    active?: BoolFilter<"QRRecord"> | boolean
    scanCount?: IntFilter<"QRRecord"> | number
    lastVerifiedAt?: DateTimeNullableFilter<"QRRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"QRRecord"> | Date | string
    updatedAt?: DateTimeFilter<"QRRecord"> | Date | string
    certificate?: XOR<CertificateScalarRelationFilter, CertificateWhereInput>
  }, "id" | "certificateId" | "publicToken">

  export type QRRecordOrderByWithAggregationInput = {
    id?: SortOrder
    certificateId?: SortOrder
    publicToken?: SortOrder
    active?: SortOrder
    scanCount?: SortOrder
    lastVerifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QRRecordCountOrderByAggregateInput
    _avg?: QRRecordAvgOrderByAggregateInput
    _max?: QRRecordMaxOrderByAggregateInput
    _min?: QRRecordMinOrderByAggregateInput
    _sum?: QRRecordSumOrderByAggregateInput
  }

  export type QRRecordScalarWhereWithAggregatesInput = {
    AND?: QRRecordScalarWhereWithAggregatesInput | QRRecordScalarWhereWithAggregatesInput[]
    OR?: QRRecordScalarWhereWithAggregatesInput[]
    NOT?: QRRecordScalarWhereWithAggregatesInput | QRRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QRRecord"> | string
    certificateId?: StringWithAggregatesFilter<"QRRecord"> | string
    publicToken?: StringWithAggregatesFilter<"QRRecord"> | string
    active?: BoolWithAggregatesFilter<"QRRecord"> | boolean
    scanCount?: IntWithAggregatesFilter<"QRRecord"> | number
    lastVerifiedAt?: DateTimeNullableWithAggregatesFilter<"QRRecord"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QRRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QRRecord"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    certificates?: CertificateCreateNestedManyWithoutGraderInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutGraderInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    certificates?: CertificateUpdateManyWithoutGraderNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutGraderNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardSetCreateInput = {
    id?: string
    name: string
    brand?: string
    year?: number | null
    createdAt?: Date | string
    cards?: CardCreateNestedManyWithoutSetInput
  }

  export type CardSetUncheckedCreateInput = {
    id?: string
    name: string
    brand?: string
    year?: number | null
    createdAt?: Date | string
    cards?: CardUncheckedCreateNestedManyWithoutSetInput
  }

  export type CardSetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardUpdateManyWithoutSetNestedInput
  }

  export type CardSetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cards?: CardUncheckedUpdateManyWithoutSetNestedInput
  }

  export type CardSetCreateManyInput = {
    id?: string
    name: string
    brand?: string
    year?: number | null
    createdAt?: Date | string
  }

  export type CardSetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardSetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateInput = {
    id?: string
    name: string
    collectorNo?: string | null
    variant?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    set: CardSetCreateNestedOneWithoutCardsInput
    submissions?: SubmissionCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    setId: string
    name: string
    collectorNo?: string | null
    variant?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    set?: CardSetUpdateOneRequiredWithoutCardsNestedInput
    submissions?: SubmissionUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    setId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: string
    setId: string
    name: string
    collectorNo?: string | null
    variant?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    setId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    card?: CardCreateNestedOneWithoutSubmissionsInput
    gradingReports?: GradingReportCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    cardId?: string | null
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingReports?: GradingReportUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    card?: CardUpdateOneWithoutSubmissionsNestedInput
    gradingReports?: GradingReportUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingReports?: GradingReportUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    cardId?: string | null
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradingReportCreateInput = {
    id?: string
    methodologyVersion: string
    centering?: Decimal | DecimalJsLike | number | string | null
    corners?: Decimal | DecimalJsLike | number | string | null
    edges?: Decimal | DecimalJsLike | number | string | null
    surface?: Decimal | DecimalJsLike | number | string | null
    printQuality?: Decimal | DecimalJsLike | number | string | null
    whitening?: Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: Decimal | DecimalJsLike | number | string | null
    humanGrade?: Decimal | DecimalJsLike | number | string | null
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutGradingReportsInput
    certificate?: CertificateCreateNestedOneWithoutGradingReportInput
  }

  export type GradingReportUncheckedCreateInput = {
    id?: string
    submissionId: string
    methodologyVersion: string
    centering?: Decimal | DecimalJsLike | number | string | null
    corners?: Decimal | DecimalJsLike | number | string | null
    edges?: Decimal | DecimalJsLike | number | string | null
    surface?: Decimal | DecimalJsLike | number | string | null
    printQuality?: Decimal | DecimalJsLike | number | string | null
    whitening?: Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: Decimal | DecimalJsLike | number | string | null
    humanGrade?: Decimal | DecimalJsLike | number | string | null
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificate?: CertificateUncheckedCreateNestedOneWithoutGradingReportInput
  }

  export type GradingReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutGradingReportsNestedInput
    certificate?: CertificateUpdateOneWithoutGradingReportNestedInput
  }

  export type GradingReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificate?: CertificateUncheckedUpdateOneWithoutGradingReportNestedInput
  }

  export type GradingReportCreateManyInput = {
    id?: string
    submissionId: string
    methodologyVersion: string
    centering?: Decimal | DecimalJsLike | number | string | null
    corners?: Decimal | DecimalJsLike | number | string | null
    edges?: Decimal | DecimalJsLike | number | string | null
    surface?: Decimal | DecimalJsLike | number | string | null
    printQuality?: Decimal | DecimalJsLike | number | string | null
    whitening?: Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: Decimal | DecimalJsLike | number | string | null
    humanGrade?: Decimal | DecimalJsLike | number | string | null
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradingReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradingReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    id?: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingReport: GradingReportCreateNestedOneWithoutCertificateInput
    grader?: UserCreateNestedOneWithoutCertificatesInput
    slab?: SlabCreateNestedOneWithoutCertificateInput
    nfcRecord?: NFCRecordCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    gradingReportId: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    graderId?: string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slab?: SlabUncheckedCreateNestedOneWithoutCertificateInput
    nfcRecord?: NFCRecordUncheckedCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingReport?: GradingReportUpdateOneRequiredWithoutCertificateNestedInput
    grader?: UserUpdateOneWithoutCertificatesNestedInput
    slab?: SlabUpdateOneWithoutCertificateNestedInput
    nfcRecord?: NFCRecordUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradingReportId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    graderId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slab?: SlabUncheckedUpdateOneWithoutCertificateNestedInput
    nfcRecord?: NFCRecordUncheckedUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateCreateManyInput = {
    id?: string
    gradingReportId: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    graderId?: string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradingReportId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    graderId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlabCreateInput = {
    id?: string
    status?: $Enums.SlabStatus
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificate: CertificateCreateNestedOneWithoutSlabInput
    nfcRecord?: NFCRecordCreateNestedOneWithoutSlabInput
  }

  export type SlabUncheckedCreateInput = {
    id?: string
    certificateId: string
    status?: $Enums.SlabStatus
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nfcRecord?: NFCRecordUncheckedCreateNestedOneWithoutSlabInput
  }

  export type SlabUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSlabStatusFieldUpdateOperationsInput | $Enums.SlabStatus
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificate?: CertificateUpdateOneRequiredWithoutSlabNestedInput
    nfcRecord?: NFCRecordUpdateOneWithoutSlabNestedInput
  }

  export type SlabUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateId?: StringFieldUpdateOperationsInput | string
    status?: EnumSlabStatusFieldUpdateOperationsInput | $Enums.SlabStatus
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nfcRecord?: NFCRecordUncheckedUpdateOneWithoutSlabNestedInput
  }

  export type SlabCreateManyInput = {
    id?: string
    certificateId: string
    status?: $Enums.SlabStatus
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlabUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSlabStatusFieldUpdateOperationsInput | $Enums.SlabStatus
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlabUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateId?: StringFieldUpdateOperationsInput | string
    status?: EnumSlabStatusFieldUpdateOperationsInput | $Enums.SlabStatus
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NFCRecordCreateInput = {
    id?: string
    identifier: string
    securityLevel?: $Enums.VerificationSecurityLevel
    tamperStatus?: $Enums.TamperStatus
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificate: CertificateCreateNestedOneWithoutNfcRecordInput
    slab?: SlabCreateNestedOneWithoutNfcRecordInput
  }

  export type NFCRecordUncheckedCreateInput = {
    id?: string
    certificateId: string
    identifier: string
    securityLevel?: $Enums.VerificationSecurityLevel
    tamperStatus?: $Enums.TamperStatus
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slabId?: string | null
  }

  export type NFCRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    securityLevel?: EnumVerificationSecurityLevelFieldUpdateOperationsInput | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFieldUpdateOperationsInput | $Enums.TamperStatus
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificate?: CertificateUpdateOneRequiredWithoutNfcRecordNestedInput
    slab?: SlabUpdateOneWithoutNfcRecordNestedInput
  }

  export type NFCRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateId?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    securityLevel?: EnumVerificationSecurityLevelFieldUpdateOperationsInput | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFieldUpdateOperationsInput | $Enums.TamperStatus
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slabId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NFCRecordCreateManyInput = {
    id?: string
    certificateId: string
    identifier: string
    securityLevel?: $Enums.VerificationSecurityLevel
    tamperStatus?: $Enums.TamperStatus
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slabId?: string | null
  }

  export type NFCRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    securityLevel?: EnumVerificationSecurityLevelFieldUpdateOperationsInput | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFieldUpdateOperationsInput | $Enums.TamperStatus
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NFCRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateId?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    securityLevel?: EnumVerificationSecurityLevelFieldUpdateOperationsInput | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFieldUpdateOperationsInput | $Enums.TamperStatus
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slabId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRRecordCreateInput = {
    id?: string
    publicToken: string
    active?: boolean
    scanCount?: number
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificate: CertificateCreateNestedOneWithoutQrRecordInput
  }

  export type QRRecordUncheckedCreateInput = {
    id?: string
    certificateId: string
    publicToken: string
    active?: boolean
    scanCount?: number
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QRRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicToken?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    scanCount?: IntFieldUpdateOperationsInput | number
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificate?: CertificateUpdateOneRequiredWithoutQrRecordNestedInput
  }

  export type QRRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateId?: StringFieldUpdateOperationsInput | string
    publicToken?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    scanCount?: IntFieldUpdateOperationsInput | number
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRRecordCreateManyInput = {
    id?: string
    certificateId: string
    publicToken: string
    active?: boolean
    scanCount?: number
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QRRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicToken?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    scanCount?: IntFieldUpdateOperationsInput | number
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateId?: StringFieldUpdateOperationsInput | string
    publicToken?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    scanCount?: IntFieldUpdateOperationsInput | number
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorId?: string | null
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorId?: string | null
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    displayName?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardSetBrandNameYearCompoundUniqueInput = {
    brand: string
    name: string
    year: number
  }

  export type CardSetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type CardSetAvgOrderByAggregateInput = {
    year?: SortOrder
  }

  export type CardSetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type CardSetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brand?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type CardSetSumOrderByAggregateInput = {
    year?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CardSetScalarRelationFilter = {
    is?: CardSetWhereInput
    isNot?: CardSetWhereInput
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    name?: SortOrder
    collectorNo?: SortOrder
    variant?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    name?: SortOrder
    collectorNo?: SortOrder
    variant?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    setId?: SortOrder
    name?: SortOrder
    collectorNo?: SortOrder
    variant?: SortOrder
    language?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CardNullableScalarRelationFilter = {
    is?: CardWhereInput | null
    isNot?: CardWhereInput | null
  }

  export type GradingReportListRelationFilter = {
    every?: GradingReportWhereInput
    some?: GradingReportWhereInput
    none?: GradingReportWhereInput
  }

  export type GradingReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type CertificateNullableScalarRelationFilter = {
    is?: CertificateWhereInput | null
    isNot?: CertificateWhereInput | null
  }

  export type GradingReportCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    methodologyVersion?: SortOrder
    centering?: SortOrder
    corners?: SortOrder
    edges?: SortOrder
    surface?: SortOrder
    printQuality?: SortOrder
    whitening?: SortOrder
    defects?: SortOrder
    proposedGrade?: SortOrder
    humanGrade?: SortOrder
    finalizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradingReportAvgOrderByAggregateInput = {
    centering?: SortOrder
    corners?: SortOrder
    edges?: SortOrder
    surface?: SortOrder
    printQuality?: SortOrder
    whitening?: SortOrder
    proposedGrade?: SortOrder
    humanGrade?: SortOrder
  }

  export type GradingReportMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    methodologyVersion?: SortOrder
    centering?: SortOrder
    corners?: SortOrder
    edges?: SortOrder
    surface?: SortOrder
    printQuality?: SortOrder
    whitening?: SortOrder
    proposedGrade?: SortOrder
    humanGrade?: SortOrder
    finalizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradingReportMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    methodologyVersion?: SortOrder
    centering?: SortOrder
    corners?: SortOrder
    edges?: SortOrder
    surface?: SortOrder
    printQuality?: SortOrder
    whitening?: SortOrder
    proposedGrade?: SortOrder
    humanGrade?: SortOrder
    finalizedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GradingReportSumOrderByAggregateInput = {
    centering?: SortOrder
    corners?: SortOrder
    edges?: SortOrder
    surface?: SortOrder
    printQuality?: SortOrder
    whitening?: SortOrder
    proposedGrade?: SortOrder
    humanGrade?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumCertificateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificateStatus | EnumCertificateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificateStatus[] | ListEnumCertificateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificateStatus[] | ListEnumCertificateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificateStatusFilter<$PrismaModel> | $Enums.CertificateStatus
  }

  export type GradingReportScalarRelationFilter = {
    is?: GradingReportWhereInput
    isNot?: GradingReportWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SlabNullableScalarRelationFilter = {
    is?: SlabWhereInput | null
    isNot?: SlabWhereInput | null
  }

  export type NFCRecordNullableScalarRelationFilter = {
    is?: NFCRecordWhereInput | null
    isNot?: NFCRecordWhereInput | null
  }

  export type QRRecordNullableScalarRelationFilter = {
    is?: QRRecordWhereInput | null
    isNot?: QRRecordWhereInput | null
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    gradingReportId?: SortOrder
    certificateNo?: SortOrder
    serialNo?: SortOrder
    status?: SortOrder
    finalGrade?: SortOrder
    graderId?: SortOrder
    verificationHash?: SortOrder
    certifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateAvgOrderByAggregateInput = {
    finalGrade?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    gradingReportId?: SortOrder
    certificateNo?: SortOrder
    serialNo?: SortOrder
    status?: SortOrder
    finalGrade?: SortOrder
    graderId?: SortOrder
    verificationHash?: SortOrder
    certifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    gradingReportId?: SortOrder
    certificateNo?: SortOrder
    serialNo?: SortOrder
    status?: SortOrder
    finalGrade?: SortOrder
    graderId?: SortOrder
    verificationHash?: SortOrder
    certifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateSumOrderByAggregateInput = {
    finalGrade?: SortOrder
  }

  export type EnumCertificateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificateStatus | EnumCertificateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificateStatus[] | ListEnumCertificateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificateStatus[] | ListEnumCertificateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificateStatusWithAggregatesFilter<$PrismaModel> | $Enums.CertificateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertificateStatusFilter<$PrismaModel>
    _max?: NestedEnumCertificateStatusFilter<$PrismaModel>
  }

  export type EnumSlabStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlabStatus | EnumSlabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlabStatus[] | ListEnumSlabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlabStatus[] | ListEnumSlabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlabStatusFilter<$PrismaModel> | $Enums.SlabStatus
  }

  export type CertificateScalarRelationFilter = {
    is?: CertificateWhereInput
    isNot?: CertificateWhereInput
  }

  export type SlabCountOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    status?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlabMaxOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    status?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlabMinOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    status?: SortOrder
    model?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSlabStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlabStatus | EnumSlabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlabStatus[] | ListEnumSlabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlabStatus[] | ListEnumSlabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlabStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlabStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlabStatusFilter<$PrismaModel>
    _max?: NestedEnumSlabStatusFilter<$PrismaModel>
  }

  export type EnumVerificationSecurityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationSecurityLevel | EnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationSecurityLevel[] | ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationSecurityLevel[] | ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationSecurityLevelFilter<$PrismaModel> | $Enums.VerificationSecurityLevel
  }

  export type EnumTamperStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TamperStatus | EnumTamperStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TamperStatus[] | ListEnumTamperStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TamperStatus[] | ListEnumTamperStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTamperStatusFilter<$PrismaModel> | $Enums.TamperStatus
  }

  export type NFCRecordCountOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    identifier?: SortOrder
    securityLevel?: SortOrder
    tamperStatus?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slabId?: SortOrder
  }

  export type NFCRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    identifier?: SortOrder
    securityLevel?: SortOrder
    tamperStatus?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slabId?: SortOrder
  }

  export type NFCRecordMinOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    identifier?: SortOrder
    securityLevel?: SortOrder
    tamperStatus?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slabId?: SortOrder
  }

  export type EnumVerificationSecurityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationSecurityLevel | EnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationSecurityLevel[] | ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationSecurityLevel[] | ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationSecurityLevelWithAggregatesFilter<$PrismaModel> | $Enums.VerificationSecurityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationSecurityLevelFilter<$PrismaModel>
    _max?: NestedEnumVerificationSecurityLevelFilter<$PrismaModel>
  }

  export type EnumTamperStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TamperStatus | EnumTamperStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TamperStatus[] | ListEnumTamperStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TamperStatus[] | ListEnumTamperStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTamperStatusWithAggregatesFilter<$PrismaModel> | $Enums.TamperStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTamperStatusFilter<$PrismaModel>
    _max?: NestedEnumTamperStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QRRecordCountOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    publicToken?: SortOrder
    active?: SortOrder
    scanCount?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRRecordAvgOrderByAggregateInput = {
    scanCount?: SortOrder
  }

  export type QRRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    publicToken?: SortOrder
    active?: SortOrder
    scanCount?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRRecordMinOrderByAggregateInput = {
    id?: SortOrder
    certificateId?: SortOrder
    publicToken?: SortOrder
    active?: SortOrder
    scanCount?: SortOrder
    lastVerifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QRRecordSumOrderByAggregateInput = {
    scanCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type CertificateCreateNestedManyWithoutGraderInput = {
    create?: XOR<CertificateCreateWithoutGraderInput, CertificateUncheckedCreateWithoutGraderInput> | CertificateCreateWithoutGraderInput[] | CertificateUncheckedCreateWithoutGraderInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutGraderInput | CertificateCreateOrConnectWithoutGraderInput[]
    createMany?: CertificateCreateManyGraderInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type CertificateUncheckedCreateNestedManyWithoutGraderInput = {
    create?: XOR<CertificateCreateWithoutGraderInput, CertificateUncheckedCreateWithoutGraderInput> | CertificateCreateWithoutGraderInput[] | CertificateUncheckedCreateWithoutGraderInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutGraderInput | CertificateCreateOrConnectWithoutGraderInput[]
    createMany?: CertificateCreateManyGraderInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type CertificateUpdateManyWithoutGraderNestedInput = {
    create?: XOR<CertificateCreateWithoutGraderInput, CertificateUncheckedCreateWithoutGraderInput> | CertificateCreateWithoutGraderInput[] | CertificateUncheckedCreateWithoutGraderInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutGraderInput | CertificateCreateOrConnectWithoutGraderInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutGraderInput | CertificateUpsertWithWhereUniqueWithoutGraderInput[]
    createMany?: CertificateCreateManyGraderInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutGraderInput | CertificateUpdateWithWhereUniqueWithoutGraderInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutGraderInput | CertificateUpdateManyWithWhereWithoutGraderInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type CertificateUncheckedUpdateManyWithoutGraderNestedInput = {
    create?: XOR<CertificateCreateWithoutGraderInput, CertificateUncheckedCreateWithoutGraderInput> | CertificateCreateWithoutGraderInput[] | CertificateUncheckedCreateWithoutGraderInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutGraderInput | CertificateCreateOrConnectWithoutGraderInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutGraderInput | CertificateUpsertWithWhereUniqueWithoutGraderInput[]
    createMany?: CertificateCreateManyGraderInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutGraderInput | CertificateUpdateWithWhereUniqueWithoutGraderInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutGraderInput | CertificateUpdateManyWithWhereWithoutGraderInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type CardCreateNestedManyWithoutSetInput = {
    create?: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput> | CardCreateWithoutSetInput[] | CardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSetInput | CardCreateOrConnectWithoutSetInput[]
    createMany?: CardCreateManySetInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutSetInput = {
    create?: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput> | CardCreateWithoutSetInput[] | CardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSetInput | CardCreateOrConnectWithoutSetInput[]
    createMany?: CardCreateManySetInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardUpdateManyWithoutSetNestedInput = {
    create?: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput> | CardCreateWithoutSetInput[] | CardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSetInput | CardCreateOrConnectWithoutSetInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutSetInput | CardUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: CardCreateManySetInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutSetInput | CardUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: CardUpdateManyWithWhereWithoutSetInput | CardUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutSetNestedInput = {
    create?: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput> | CardCreateWithoutSetInput[] | CardUncheckedCreateWithoutSetInput[]
    connectOrCreate?: CardCreateOrConnectWithoutSetInput | CardCreateOrConnectWithoutSetInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutSetInput | CardUpsertWithWhereUniqueWithoutSetInput[]
    createMany?: CardCreateManySetInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutSetInput | CardUpdateWithWhereUniqueWithoutSetInput[]
    updateMany?: CardUpdateManyWithWhereWithoutSetInput | CardUpdateManyWithWhereWithoutSetInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardSetCreateNestedOneWithoutCardsInput = {
    create?: XOR<CardSetCreateWithoutCardsInput, CardSetUncheckedCreateWithoutCardsInput>
    connectOrCreate?: CardSetCreateOrConnectWithoutCardsInput
    connect?: CardSetWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutCardInput = {
    create?: XOR<SubmissionCreateWithoutCardInput, SubmissionUncheckedCreateWithoutCardInput> | SubmissionCreateWithoutCardInput[] | SubmissionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCardInput | SubmissionCreateOrConnectWithoutCardInput[]
    createMany?: SubmissionCreateManyCardInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<SubmissionCreateWithoutCardInput, SubmissionUncheckedCreateWithoutCardInput> | SubmissionCreateWithoutCardInput[] | SubmissionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCardInput | SubmissionCreateOrConnectWithoutCardInput[]
    createMany?: SubmissionCreateManyCardInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type CardSetUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<CardSetCreateWithoutCardsInput, CardSetUncheckedCreateWithoutCardsInput>
    connectOrCreate?: CardSetCreateOrConnectWithoutCardsInput
    upsert?: CardSetUpsertWithoutCardsInput
    connect?: CardSetWhereUniqueInput
    update?: XOR<XOR<CardSetUpdateToOneWithWhereWithoutCardsInput, CardSetUpdateWithoutCardsInput>, CardSetUncheckedUpdateWithoutCardsInput>
  }

  export type SubmissionUpdateManyWithoutCardNestedInput = {
    create?: XOR<SubmissionCreateWithoutCardInput, SubmissionUncheckedCreateWithoutCardInput> | SubmissionCreateWithoutCardInput[] | SubmissionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCardInput | SubmissionCreateOrConnectWithoutCardInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutCardInput | SubmissionUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: SubmissionCreateManyCardInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutCardInput | SubmissionUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutCardInput | SubmissionUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<SubmissionCreateWithoutCardInput, SubmissionUncheckedCreateWithoutCardInput> | SubmissionCreateWithoutCardInput[] | SubmissionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutCardInput | SubmissionCreateOrConnectWithoutCardInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutCardInput | SubmissionUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: SubmissionCreateManyCardInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutCardInput | SubmissionUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutCardInput | SubmissionUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type CardCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<CardCreateWithoutSubmissionsInput, CardUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: CardCreateOrConnectWithoutSubmissionsInput
    connect?: CardWhereUniqueInput
  }

  export type GradingReportCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<GradingReportCreateWithoutSubmissionInput, GradingReportUncheckedCreateWithoutSubmissionInput> | GradingReportCreateWithoutSubmissionInput[] | GradingReportUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: GradingReportCreateOrConnectWithoutSubmissionInput | GradingReportCreateOrConnectWithoutSubmissionInput[]
    createMany?: GradingReportCreateManySubmissionInputEnvelope
    connect?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
  }

  export type GradingReportUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<GradingReportCreateWithoutSubmissionInput, GradingReportUncheckedCreateWithoutSubmissionInput> | GradingReportCreateWithoutSubmissionInput[] | GradingReportUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: GradingReportCreateOrConnectWithoutSubmissionInput | GradingReportCreateOrConnectWithoutSubmissionInput[]
    createMany?: GradingReportCreateManySubmissionInputEnvelope
    connect?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
  }

  export type EnumSubmissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubmissionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type CardUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<CardCreateWithoutSubmissionsInput, CardUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: CardCreateOrConnectWithoutSubmissionsInput
    upsert?: CardUpsertWithoutSubmissionsInput
    disconnect?: CardWhereInput | boolean
    delete?: CardWhereInput | boolean
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutSubmissionsInput, CardUpdateWithoutSubmissionsInput>, CardUncheckedUpdateWithoutSubmissionsInput>
  }

  export type GradingReportUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<GradingReportCreateWithoutSubmissionInput, GradingReportUncheckedCreateWithoutSubmissionInput> | GradingReportCreateWithoutSubmissionInput[] | GradingReportUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: GradingReportCreateOrConnectWithoutSubmissionInput | GradingReportCreateOrConnectWithoutSubmissionInput[]
    upsert?: GradingReportUpsertWithWhereUniqueWithoutSubmissionInput | GradingReportUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: GradingReportCreateManySubmissionInputEnvelope
    set?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
    disconnect?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
    delete?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
    connect?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
    update?: GradingReportUpdateWithWhereUniqueWithoutSubmissionInput | GradingReportUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: GradingReportUpdateManyWithWhereWithoutSubmissionInput | GradingReportUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: GradingReportScalarWhereInput | GradingReportScalarWhereInput[]
  }

  export type GradingReportUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<GradingReportCreateWithoutSubmissionInput, GradingReportUncheckedCreateWithoutSubmissionInput> | GradingReportCreateWithoutSubmissionInput[] | GradingReportUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: GradingReportCreateOrConnectWithoutSubmissionInput | GradingReportCreateOrConnectWithoutSubmissionInput[]
    upsert?: GradingReportUpsertWithWhereUniqueWithoutSubmissionInput | GradingReportUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: GradingReportCreateManySubmissionInputEnvelope
    set?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
    disconnect?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
    delete?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
    connect?: GradingReportWhereUniqueInput | GradingReportWhereUniqueInput[]
    update?: GradingReportUpdateWithWhereUniqueWithoutSubmissionInput | GradingReportUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: GradingReportUpdateManyWithWhereWithoutSubmissionInput | GradingReportUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: GradingReportScalarWhereInput | GradingReportScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutGradingReportsInput = {
    create?: XOR<SubmissionCreateWithoutGradingReportsInput, SubmissionUncheckedCreateWithoutGradingReportsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutGradingReportsInput
    connect?: SubmissionWhereUniqueInput
  }

  export type CertificateCreateNestedOneWithoutGradingReportInput = {
    create?: XOR<CertificateCreateWithoutGradingReportInput, CertificateUncheckedCreateWithoutGradingReportInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutGradingReportInput
    connect?: CertificateWhereUniqueInput
  }

  export type CertificateUncheckedCreateNestedOneWithoutGradingReportInput = {
    create?: XOR<CertificateCreateWithoutGradingReportInput, CertificateUncheckedCreateWithoutGradingReportInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutGradingReportInput
    connect?: CertificateWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SubmissionUpdateOneRequiredWithoutGradingReportsNestedInput = {
    create?: XOR<SubmissionCreateWithoutGradingReportsInput, SubmissionUncheckedCreateWithoutGradingReportsInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutGradingReportsInput
    upsert?: SubmissionUpsertWithoutGradingReportsInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutGradingReportsInput, SubmissionUpdateWithoutGradingReportsInput>, SubmissionUncheckedUpdateWithoutGradingReportsInput>
  }

  export type CertificateUpdateOneWithoutGradingReportNestedInput = {
    create?: XOR<CertificateCreateWithoutGradingReportInput, CertificateUncheckedCreateWithoutGradingReportInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutGradingReportInput
    upsert?: CertificateUpsertWithoutGradingReportInput
    disconnect?: CertificateWhereInput | boolean
    delete?: CertificateWhereInput | boolean
    connect?: CertificateWhereUniqueInput
    update?: XOR<XOR<CertificateUpdateToOneWithWhereWithoutGradingReportInput, CertificateUpdateWithoutGradingReportInput>, CertificateUncheckedUpdateWithoutGradingReportInput>
  }

  export type CertificateUncheckedUpdateOneWithoutGradingReportNestedInput = {
    create?: XOR<CertificateCreateWithoutGradingReportInput, CertificateUncheckedCreateWithoutGradingReportInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutGradingReportInput
    upsert?: CertificateUpsertWithoutGradingReportInput
    disconnect?: CertificateWhereInput | boolean
    delete?: CertificateWhereInput | boolean
    connect?: CertificateWhereUniqueInput
    update?: XOR<XOR<CertificateUpdateToOneWithWhereWithoutGradingReportInput, CertificateUpdateWithoutGradingReportInput>, CertificateUncheckedUpdateWithoutGradingReportInput>
  }

  export type GradingReportCreateNestedOneWithoutCertificateInput = {
    create?: XOR<GradingReportCreateWithoutCertificateInput, GradingReportUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: GradingReportCreateOrConnectWithoutCertificateInput
    connect?: GradingReportWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    connect?: UserWhereUniqueInput
  }

  export type SlabCreateNestedOneWithoutCertificateInput = {
    create?: XOR<SlabCreateWithoutCertificateInput, SlabUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: SlabCreateOrConnectWithoutCertificateInput
    connect?: SlabWhereUniqueInput
  }

  export type NFCRecordCreateNestedOneWithoutCertificateInput = {
    create?: XOR<NFCRecordCreateWithoutCertificateInput, NFCRecordUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: NFCRecordCreateOrConnectWithoutCertificateInput
    connect?: NFCRecordWhereUniqueInput
  }

  export type QRRecordCreateNestedOneWithoutCertificateInput = {
    create?: XOR<QRRecordCreateWithoutCertificateInput, QRRecordUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: QRRecordCreateOrConnectWithoutCertificateInput
    connect?: QRRecordWhereUniqueInput
  }

  export type SlabUncheckedCreateNestedOneWithoutCertificateInput = {
    create?: XOR<SlabCreateWithoutCertificateInput, SlabUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: SlabCreateOrConnectWithoutCertificateInput
    connect?: SlabWhereUniqueInput
  }

  export type NFCRecordUncheckedCreateNestedOneWithoutCertificateInput = {
    create?: XOR<NFCRecordCreateWithoutCertificateInput, NFCRecordUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: NFCRecordCreateOrConnectWithoutCertificateInput
    connect?: NFCRecordWhereUniqueInput
  }

  export type QRRecordUncheckedCreateNestedOneWithoutCertificateInput = {
    create?: XOR<QRRecordCreateWithoutCertificateInput, QRRecordUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: QRRecordCreateOrConnectWithoutCertificateInput
    connect?: QRRecordWhereUniqueInput
  }

  export type EnumCertificateStatusFieldUpdateOperationsInput = {
    set?: $Enums.CertificateStatus
  }

  export type GradingReportUpdateOneRequiredWithoutCertificateNestedInput = {
    create?: XOR<GradingReportCreateWithoutCertificateInput, GradingReportUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: GradingReportCreateOrConnectWithoutCertificateInput
    upsert?: GradingReportUpsertWithoutCertificateInput
    connect?: GradingReportWhereUniqueInput
    update?: XOR<XOR<GradingReportUpdateToOneWithWhereWithoutCertificateInput, GradingReportUpdateWithoutCertificateInput>, GradingReportUncheckedUpdateWithoutCertificateInput>
  }

  export type UserUpdateOneWithoutCertificatesNestedInput = {
    create?: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCertificatesInput
    upsert?: UserUpsertWithoutCertificatesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCertificatesInput, UserUpdateWithoutCertificatesInput>, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type SlabUpdateOneWithoutCertificateNestedInput = {
    create?: XOR<SlabCreateWithoutCertificateInput, SlabUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: SlabCreateOrConnectWithoutCertificateInput
    upsert?: SlabUpsertWithoutCertificateInput
    disconnect?: SlabWhereInput | boolean
    delete?: SlabWhereInput | boolean
    connect?: SlabWhereUniqueInput
    update?: XOR<XOR<SlabUpdateToOneWithWhereWithoutCertificateInput, SlabUpdateWithoutCertificateInput>, SlabUncheckedUpdateWithoutCertificateInput>
  }

  export type NFCRecordUpdateOneWithoutCertificateNestedInput = {
    create?: XOR<NFCRecordCreateWithoutCertificateInput, NFCRecordUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: NFCRecordCreateOrConnectWithoutCertificateInput
    upsert?: NFCRecordUpsertWithoutCertificateInput
    disconnect?: NFCRecordWhereInput | boolean
    delete?: NFCRecordWhereInput | boolean
    connect?: NFCRecordWhereUniqueInput
    update?: XOR<XOR<NFCRecordUpdateToOneWithWhereWithoutCertificateInput, NFCRecordUpdateWithoutCertificateInput>, NFCRecordUncheckedUpdateWithoutCertificateInput>
  }

  export type QRRecordUpdateOneWithoutCertificateNestedInput = {
    create?: XOR<QRRecordCreateWithoutCertificateInput, QRRecordUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: QRRecordCreateOrConnectWithoutCertificateInput
    upsert?: QRRecordUpsertWithoutCertificateInput
    disconnect?: QRRecordWhereInput | boolean
    delete?: QRRecordWhereInput | boolean
    connect?: QRRecordWhereUniqueInput
    update?: XOR<XOR<QRRecordUpdateToOneWithWhereWithoutCertificateInput, QRRecordUpdateWithoutCertificateInput>, QRRecordUncheckedUpdateWithoutCertificateInput>
  }

  export type SlabUncheckedUpdateOneWithoutCertificateNestedInput = {
    create?: XOR<SlabCreateWithoutCertificateInput, SlabUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: SlabCreateOrConnectWithoutCertificateInput
    upsert?: SlabUpsertWithoutCertificateInput
    disconnect?: SlabWhereInput | boolean
    delete?: SlabWhereInput | boolean
    connect?: SlabWhereUniqueInput
    update?: XOR<XOR<SlabUpdateToOneWithWhereWithoutCertificateInput, SlabUpdateWithoutCertificateInput>, SlabUncheckedUpdateWithoutCertificateInput>
  }

  export type NFCRecordUncheckedUpdateOneWithoutCertificateNestedInput = {
    create?: XOR<NFCRecordCreateWithoutCertificateInput, NFCRecordUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: NFCRecordCreateOrConnectWithoutCertificateInput
    upsert?: NFCRecordUpsertWithoutCertificateInput
    disconnect?: NFCRecordWhereInput | boolean
    delete?: NFCRecordWhereInput | boolean
    connect?: NFCRecordWhereUniqueInput
    update?: XOR<XOR<NFCRecordUpdateToOneWithWhereWithoutCertificateInput, NFCRecordUpdateWithoutCertificateInput>, NFCRecordUncheckedUpdateWithoutCertificateInput>
  }

  export type QRRecordUncheckedUpdateOneWithoutCertificateNestedInput = {
    create?: XOR<QRRecordCreateWithoutCertificateInput, QRRecordUncheckedCreateWithoutCertificateInput>
    connectOrCreate?: QRRecordCreateOrConnectWithoutCertificateInput
    upsert?: QRRecordUpsertWithoutCertificateInput
    disconnect?: QRRecordWhereInput | boolean
    delete?: QRRecordWhereInput | boolean
    connect?: QRRecordWhereUniqueInput
    update?: XOR<XOR<QRRecordUpdateToOneWithWhereWithoutCertificateInput, QRRecordUpdateWithoutCertificateInput>, QRRecordUncheckedUpdateWithoutCertificateInput>
  }

  export type CertificateCreateNestedOneWithoutSlabInput = {
    create?: XOR<CertificateCreateWithoutSlabInput, CertificateUncheckedCreateWithoutSlabInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutSlabInput
    connect?: CertificateWhereUniqueInput
  }

  export type NFCRecordCreateNestedOneWithoutSlabInput = {
    create?: XOR<NFCRecordCreateWithoutSlabInput, NFCRecordUncheckedCreateWithoutSlabInput>
    connectOrCreate?: NFCRecordCreateOrConnectWithoutSlabInput
    connect?: NFCRecordWhereUniqueInput
  }

  export type NFCRecordUncheckedCreateNestedOneWithoutSlabInput = {
    create?: XOR<NFCRecordCreateWithoutSlabInput, NFCRecordUncheckedCreateWithoutSlabInput>
    connectOrCreate?: NFCRecordCreateOrConnectWithoutSlabInput
    connect?: NFCRecordWhereUniqueInput
  }

  export type EnumSlabStatusFieldUpdateOperationsInput = {
    set?: $Enums.SlabStatus
  }

  export type CertificateUpdateOneRequiredWithoutSlabNestedInput = {
    create?: XOR<CertificateCreateWithoutSlabInput, CertificateUncheckedCreateWithoutSlabInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutSlabInput
    upsert?: CertificateUpsertWithoutSlabInput
    connect?: CertificateWhereUniqueInput
    update?: XOR<XOR<CertificateUpdateToOneWithWhereWithoutSlabInput, CertificateUpdateWithoutSlabInput>, CertificateUncheckedUpdateWithoutSlabInput>
  }

  export type NFCRecordUpdateOneWithoutSlabNestedInput = {
    create?: XOR<NFCRecordCreateWithoutSlabInput, NFCRecordUncheckedCreateWithoutSlabInput>
    connectOrCreate?: NFCRecordCreateOrConnectWithoutSlabInput
    upsert?: NFCRecordUpsertWithoutSlabInput
    disconnect?: NFCRecordWhereInput | boolean
    delete?: NFCRecordWhereInput | boolean
    connect?: NFCRecordWhereUniqueInput
    update?: XOR<XOR<NFCRecordUpdateToOneWithWhereWithoutSlabInput, NFCRecordUpdateWithoutSlabInput>, NFCRecordUncheckedUpdateWithoutSlabInput>
  }

  export type NFCRecordUncheckedUpdateOneWithoutSlabNestedInput = {
    create?: XOR<NFCRecordCreateWithoutSlabInput, NFCRecordUncheckedCreateWithoutSlabInput>
    connectOrCreate?: NFCRecordCreateOrConnectWithoutSlabInput
    upsert?: NFCRecordUpsertWithoutSlabInput
    disconnect?: NFCRecordWhereInput | boolean
    delete?: NFCRecordWhereInput | boolean
    connect?: NFCRecordWhereUniqueInput
    update?: XOR<XOR<NFCRecordUpdateToOneWithWhereWithoutSlabInput, NFCRecordUpdateWithoutSlabInput>, NFCRecordUncheckedUpdateWithoutSlabInput>
  }

  export type CertificateCreateNestedOneWithoutNfcRecordInput = {
    create?: XOR<CertificateCreateWithoutNfcRecordInput, CertificateUncheckedCreateWithoutNfcRecordInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutNfcRecordInput
    connect?: CertificateWhereUniqueInput
  }

  export type SlabCreateNestedOneWithoutNfcRecordInput = {
    create?: XOR<SlabCreateWithoutNfcRecordInput, SlabUncheckedCreateWithoutNfcRecordInput>
    connectOrCreate?: SlabCreateOrConnectWithoutNfcRecordInput
    connect?: SlabWhereUniqueInput
  }

  export type EnumVerificationSecurityLevelFieldUpdateOperationsInput = {
    set?: $Enums.VerificationSecurityLevel
  }

  export type EnumTamperStatusFieldUpdateOperationsInput = {
    set?: $Enums.TamperStatus
  }

  export type CertificateUpdateOneRequiredWithoutNfcRecordNestedInput = {
    create?: XOR<CertificateCreateWithoutNfcRecordInput, CertificateUncheckedCreateWithoutNfcRecordInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutNfcRecordInput
    upsert?: CertificateUpsertWithoutNfcRecordInput
    connect?: CertificateWhereUniqueInput
    update?: XOR<XOR<CertificateUpdateToOneWithWhereWithoutNfcRecordInput, CertificateUpdateWithoutNfcRecordInput>, CertificateUncheckedUpdateWithoutNfcRecordInput>
  }

  export type SlabUpdateOneWithoutNfcRecordNestedInput = {
    create?: XOR<SlabCreateWithoutNfcRecordInput, SlabUncheckedCreateWithoutNfcRecordInput>
    connectOrCreate?: SlabCreateOrConnectWithoutNfcRecordInput
    upsert?: SlabUpsertWithoutNfcRecordInput
    disconnect?: SlabWhereInput | boolean
    delete?: SlabWhereInput | boolean
    connect?: SlabWhereUniqueInput
    update?: XOR<XOR<SlabUpdateToOneWithWhereWithoutNfcRecordInput, SlabUpdateWithoutNfcRecordInput>, SlabUncheckedUpdateWithoutNfcRecordInput>
  }

  export type CertificateCreateNestedOneWithoutQrRecordInput = {
    create?: XOR<CertificateCreateWithoutQrRecordInput, CertificateUncheckedCreateWithoutQrRecordInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutQrRecordInput
    connect?: CertificateWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CertificateUpdateOneRequiredWithoutQrRecordNestedInput = {
    create?: XOR<CertificateCreateWithoutQrRecordInput, CertificateUncheckedCreateWithoutQrRecordInput>
    connectOrCreate?: CertificateCreateOrConnectWithoutQrRecordInput
    upsert?: CertificateUpsertWithoutQrRecordInput
    connect?: CertificateWhereUniqueInput
    update?: XOR<XOR<CertificateUpdateToOneWithWhereWithoutQrRecordInput, CertificateUpdateWithoutQrRecordInput>, CertificateUncheckedUpdateWithoutQrRecordInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSubmissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusFilter<$PrismaModel> | $Enums.SubmissionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubmissionStatus | EnumSubmissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubmissionStatus[] | ListEnumSubmissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubmissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubmissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubmissionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubmissionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCertificateStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificateStatus | EnumCertificateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificateStatus[] | ListEnumCertificateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificateStatus[] | ListEnumCertificateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificateStatusFilter<$PrismaModel> | $Enums.CertificateStatus
  }

  export type NestedEnumCertificateStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CertificateStatus | EnumCertificateStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CertificateStatus[] | ListEnumCertificateStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CertificateStatus[] | ListEnumCertificateStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCertificateStatusWithAggregatesFilter<$PrismaModel> | $Enums.CertificateStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCertificateStatusFilter<$PrismaModel>
    _max?: NestedEnumCertificateStatusFilter<$PrismaModel>
  }

  export type NestedEnumSlabStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlabStatus | EnumSlabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlabStatus[] | ListEnumSlabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlabStatus[] | ListEnumSlabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlabStatusFilter<$PrismaModel> | $Enums.SlabStatus
  }

  export type NestedEnumSlabStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlabStatus | EnumSlabStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlabStatus[] | ListEnumSlabStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlabStatus[] | ListEnumSlabStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlabStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlabStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlabStatusFilter<$PrismaModel>
    _max?: NestedEnumSlabStatusFilter<$PrismaModel>
  }

  export type NestedEnumVerificationSecurityLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationSecurityLevel | EnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationSecurityLevel[] | ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationSecurityLevel[] | ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationSecurityLevelFilter<$PrismaModel> | $Enums.VerificationSecurityLevel
  }

  export type NestedEnumTamperStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TamperStatus | EnumTamperStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TamperStatus[] | ListEnumTamperStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TamperStatus[] | ListEnumTamperStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTamperStatusFilter<$PrismaModel> | $Enums.TamperStatus
  }

  export type NestedEnumVerificationSecurityLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationSecurityLevel | EnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationSecurityLevel[] | ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.VerificationSecurityLevel[] | ListEnumVerificationSecurityLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumVerificationSecurityLevelWithAggregatesFilter<$PrismaModel> | $Enums.VerificationSecurityLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationSecurityLevelFilter<$PrismaModel>
    _max?: NestedEnumVerificationSecurityLevelFilter<$PrismaModel>
  }

  export type NestedEnumTamperStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TamperStatus | EnumTamperStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TamperStatus[] | ListEnumTamperStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TamperStatus[] | ListEnumTamperStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTamperStatusWithAggregatesFilter<$PrismaModel> | $Enums.TamperStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTamperStatusFilter<$PrismaModel>
    _max?: NestedEnumTamperStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    card?: CardCreateNestedOneWithoutSubmissionsInput
    gradingReports?: GradingReportCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    cardId?: string | null
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingReports?: GradingReportUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type CertificateCreateWithoutGraderInput = {
    id?: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingReport: GradingReportCreateNestedOneWithoutCertificateInput
    slab?: SlabCreateNestedOneWithoutCertificateInput
    nfcRecord?: NFCRecordCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateWithoutGraderInput = {
    id?: string
    gradingReportId: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slab?: SlabUncheckedCreateNestedOneWithoutCertificateInput
    nfcRecord?: NFCRecordUncheckedCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateCreateOrConnectWithoutGraderInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutGraderInput, CertificateUncheckedCreateWithoutGraderInput>
  }

  export type CertificateCreateManyGraderInputEnvelope = {
    data: CertificateCreateManyGraderInput | CertificateCreateManyGraderInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    tokenHash?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    cardId?: StringNullableFilter<"Submission"> | string | null
    status?: EnumSubmissionStatusFilter<"Submission"> | $Enums.SubmissionStatus
    submittedAt?: DateTimeNullableFilter<"Submission"> | Date | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type CertificateUpsertWithWhereUniqueWithoutGraderInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutGraderInput, CertificateUncheckedUpdateWithoutGraderInput>
    create: XOR<CertificateCreateWithoutGraderInput, CertificateUncheckedCreateWithoutGraderInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutGraderInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutGraderInput, CertificateUncheckedUpdateWithoutGraderInput>
  }

  export type CertificateUpdateManyWithWhereWithoutGraderInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutGraderInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: StringFilter<"Certificate"> | string
    gradingReportId?: StringFilter<"Certificate"> | string
    certificateNo?: StringFilter<"Certificate"> | string
    serialNo?: StringFilter<"Certificate"> | string
    status?: EnumCertificateStatusFilter<"Certificate"> | $Enums.CertificateStatus
    finalGrade?: DecimalNullableFilter<"Certificate"> | Decimal | DecimalJsLike | number | string | null
    graderId?: StringNullableFilter<"Certificate"> | string | null
    verificationHash?: StringNullableFilter<"Certificate"> | string | null
    certifiedAt?: DateTimeNullableFilter<"Certificate"> | Date | string | null
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    certificates?: CertificateCreateNestedManyWithoutGraderInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutGraderInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    certificates?: CertificateUpdateManyWithoutGraderNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutGraderNestedInput
  }

  export type CardCreateWithoutSetInput = {
    id?: string
    name: string
    collectorNo?: string | null
    variant?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutSetInput = {
    id?: string
    name: string
    collectorNo?: string | null
    variant?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutSetInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput>
  }

  export type CardCreateManySetInputEnvelope = {
    data: CardCreateManySetInput | CardCreateManySetInput[]
    skipDuplicates?: boolean
  }

  export type CardUpsertWithWhereUniqueWithoutSetInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutSetInput, CardUncheckedUpdateWithoutSetInput>
    create: XOR<CardCreateWithoutSetInput, CardUncheckedCreateWithoutSetInput>
  }

  export type CardUpdateWithWhereUniqueWithoutSetInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutSetInput, CardUncheckedUpdateWithoutSetInput>
  }

  export type CardUpdateManyWithWhereWithoutSetInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutSetInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: StringFilter<"Card"> | string
    setId?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    collectorNo?: StringNullableFilter<"Card"> | string | null
    variant?: StringNullableFilter<"Card"> | string | null
    language?: StringNullableFilter<"Card"> | string | null
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
  }

  export type CardSetCreateWithoutCardsInput = {
    id?: string
    name: string
    brand?: string
    year?: number | null
    createdAt?: Date | string
  }

  export type CardSetUncheckedCreateWithoutCardsInput = {
    id?: string
    name: string
    brand?: string
    year?: number | null
    createdAt?: Date | string
  }

  export type CardSetCreateOrConnectWithoutCardsInput = {
    where: CardSetWhereUniqueInput
    create: XOR<CardSetCreateWithoutCardsInput, CardSetUncheckedCreateWithoutCardsInput>
  }

  export type SubmissionCreateWithoutCardInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    gradingReports?: GradingReportCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutCardInput = {
    id?: string
    userId: string
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingReports?: GradingReportUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutCardInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutCardInput, SubmissionUncheckedCreateWithoutCardInput>
  }

  export type SubmissionCreateManyCardInputEnvelope = {
    data: SubmissionCreateManyCardInput | SubmissionCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type CardSetUpsertWithoutCardsInput = {
    update: XOR<CardSetUpdateWithoutCardsInput, CardSetUncheckedUpdateWithoutCardsInput>
    create: XOR<CardSetCreateWithoutCardsInput, CardSetUncheckedCreateWithoutCardsInput>
    where?: CardSetWhereInput
  }

  export type CardSetUpdateToOneWithWhereWithoutCardsInput = {
    where?: CardSetWhereInput
    data: XOR<CardSetUpdateWithoutCardsInput, CardSetUncheckedUpdateWithoutCardsInput>
  }

  export type CardSetUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardSetUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    year?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutCardInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutCardInput, SubmissionUncheckedUpdateWithoutCardInput>
    create: XOR<SubmissionCreateWithoutCardInput, SubmissionUncheckedCreateWithoutCardInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutCardInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutCardInput, SubmissionUncheckedUpdateWithoutCardInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutCardInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutCardInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
    certificates?: CertificateCreateNestedManyWithoutGraderInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutGraderInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type CardCreateWithoutSubmissionsInput = {
    id?: string
    name: string
    collectorNo?: string | null
    variant?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    set: CardSetCreateNestedOneWithoutCardsInput
  }

  export type CardUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    setId: string
    name: string
    collectorNo?: string | null
    variant?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardCreateOrConnectWithoutSubmissionsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutSubmissionsInput, CardUncheckedCreateWithoutSubmissionsInput>
  }

  export type GradingReportCreateWithoutSubmissionInput = {
    id?: string
    methodologyVersion: string
    centering?: Decimal | DecimalJsLike | number | string | null
    corners?: Decimal | DecimalJsLike | number | string | null
    edges?: Decimal | DecimalJsLike | number | string | null
    surface?: Decimal | DecimalJsLike | number | string | null
    printQuality?: Decimal | DecimalJsLike | number | string | null
    whitening?: Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: Decimal | DecimalJsLike | number | string | null
    humanGrade?: Decimal | DecimalJsLike | number | string | null
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificate?: CertificateCreateNestedOneWithoutGradingReportInput
  }

  export type GradingReportUncheckedCreateWithoutSubmissionInput = {
    id?: string
    methodologyVersion: string
    centering?: Decimal | DecimalJsLike | number | string | null
    corners?: Decimal | DecimalJsLike | number | string | null
    edges?: Decimal | DecimalJsLike | number | string | null
    surface?: Decimal | DecimalJsLike | number | string | null
    printQuality?: Decimal | DecimalJsLike | number | string | null
    whitening?: Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: Decimal | DecimalJsLike | number | string | null
    humanGrade?: Decimal | DecimalJsLike | number | string | null
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificate?: CertificateUncheckedCreateNestedOneWithoutGradingReportInput
  }

  export type GradingReportCreateOrConnectWithoutSubmissionInput = {
    where: GradingReportWhereUniqueInput
    create: XOR<GradingReportCreateWithoutSubmissionInput, GradingReportUncheckedCreateWithoutSubmissionInput>
  }

  export type GradingReportCreateManySubmissionInputEnvelope = {
    data: GradingReportCreateManySubmissionInput | GradingReportCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
    certificates?: CertificateUpdateManyWithoutGraderNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutGraderNestedInput
  }

  export type CardUpsertWithoutSubmissionsInput = {
    update: XOR<CardUpdateWithoutSubmissionsInput, CardUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<CardCreateWithoutSubmissionsInput, CardUncheckedCreateWithoutSubmissionsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutSubmissionsInput, CardUncheckedUpdateWithoutSubmissionsInput>
  }

  export type CardUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    set?: CardSetUpdateOneRequiredWithoutCardsNestedInput
  }

  export type CardUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    setId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradingReportUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: GradingReportWhereUniqueInput
    update: XOR<GradingReportUpdateWithoutSubmissionInput, GradingReportUncheckedUpdateWithoutSubmissionInput>
    create: XOR<GradingReportCreateWithoutSubmissionInput, GradingReportUncheckedCreateWithoutSubmissionInput>
  }

  export type GradingReportUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: GradingReportWhereUniqueInput
    data: XOR<GradingReportUpdateWithoutSubmissionInput, GradingReportUncheckedUpdateWithoutSubmissionInput>
  }

  export type GradingReportUpdateManyWithWhereWithoutSubmissionInput = {
    where: GradingReportScalarWhereInput
    data: XOR<GradingReportUpdateManyMutationInput, GradingReportUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type GradingReportScalarWhereInput = {
    AND?: GradingReportScalarWhereInput | GradingReportScalarWhereInput[]
    OR?: GradingReportScalarWhereInput[]
    NOT?: GradingReportScalarWhereInput | GradingReportScalarWhereInput[]
    id?: StringFilter<"GradingReport"> | string
    submissionId?: StringFilter<"GradingReport"> | string
    methodologyVersion?: StringFilter<"GradingReport"> | string
    centering?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    corners?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    edges?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    surface?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    printQuality?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    whitening?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    defects?: JsonNullableFilter<"GradingReport">
    proposedGrade?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    humanGrade?: DecimalNullableFilter<"GradingReport"> | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: DateTimeNullableFilter<"GradingReport"> | Date | string | null
    createdAt?: DateTimeFilter<"GradingReport"> | Date | string
    updatedAt?: DateTimeFilter<"GradingReport"> | Date | string
  }

  export type SubmissionCreateWithoutGradingReportsInput = {
    id?: string
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    card?: CardCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutGradingReportsInput = {
    id?: string
    userId: string
    cardId?: string | null
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutGradingReportsInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutGradingReportsInput, SubmissionUncheckedCreateWithoutGradingReportsInput>
  }

  export type CertificateCreateWithoutGradingReportInput = {
    id?: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    grader?: UserCreateNestedOneWithoutCertificatesInput
    slab?: SlabCreateNestedOneWithoutCertificateInput
    nfcRecord?: NFCRecordCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateWithoutGradingReportInput = {
    id?: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    graderId?: string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slab?: SlabUncheckedCreateNestedOneWithoutCertificateInput
    nfcRecord?: NFCRecordUncheckedCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateCreateOrConnectWithoutGradingReportInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutGradingReportInput, CertificateUncheckedCreateWithoutGradingReportInput>
  }

  export type SubmissionUpsertWithoutGradingReportsInput = {
    update: XOR<SubmissionUpdateWithoutGradingReportsInput, SubmissionUncheckedUpdateWithoutGradingReportsInput>
    create: XOR<SubmissionCreateWithoutGradingReportsInput, SubmissionUncheckedCreateWithoutGradingReportsInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutGradingReportsInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutGradingReportsInput, SubmissionUncheckedUpdateWithoutGradingReportsInput>
  }

  export type SubmissionUpdateWithoutGradingReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    card?: CardUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutGradingReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpsertWithoutGradingReportInput = {
    update: XOR<CertificateUpdateWithoutGradingReportInput, CertificateUncheckedUpdateWithoutGradingReportInput>
    create: XOR<CertificateCreateWithoutGradingReportInput, CertificateUncheckedCreateWithoutGradingReportInput>
    where?: CertificateWhereInput
  }

  export type CertificateUpdateToOneWithWhereWithoutGradingReportInput = {
    where?: CertificateWhereInput
    data: XOR<CertificateUpdateWithoutGradingReportInput, CertificateUncheckedUpdateWithoutGradingReportInput>
  }

  export type CertificateUpdateWithoutGradingReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grader?: UserUpdateOneWithoutCertificatesNestedInput
    slab?: SlabUpdateOneWithoutCertificateNestedInput
    nfcRecord?: NFCRecordUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateWithoutGradingReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    graderId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slab?: SlabUncheckedUpdateOneWithoutCertificateNestedInput
    nfcRecord?: NFCRecordUncheckedUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type GradingReportCreateWithoutCertificateInput = {
    id?: string
    methodologyVersion: string
    centering?: Decimal | DecimalJsLike | number | string | null
    corners?: Decimal | DecimalJsLike | number | string | null
    edges?: Decimal | DecimalJsLike | number | string | null
    surface?: Decimal | DecimalJsLike | number | string | null
    printQuality?: Decimal | DecimalJsLike | number | string | null
    whitening?: Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: Decimal | DecimalJsLike | number | string | null
    humanGrade?: Decimal | DecimalJsLike | number | string | null
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutGradingReportsInput
  }

  export type GradingReportUncheckedCreateWithoutCertificateInput = {
    id?: string
    submissionId: string
    methodologyVersion: string
    centering?: Decimal | DecimalJsLike | number | string | null
    corners?: Decimal | DecimalJsLike | number | string | null
    edges?: Decimal | DecimalJsLike | number | string | null
    surface?: Decimal | DecimalJsLike | number | string | null
    printQuality?: Decimal | DecimalJsLike | number | string | null
    whitening?: Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: Decimal | DecimalJsLike | number | string | null
    humanGrade?: Decimal | DecimalJsLike | number | string | null
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradingReportCreateOrConnectWithoutCertificateInput = {
    where: GradingReportWhereUniqueInput
    create: XOR<GradingReportCreateWithoutCertificateInput, GradingReportUncheckedCreateWithoutCertificateInput>
  }

  export type UserCreateWithoutCertificatesInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutCertificatesInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutCertificatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
  }

  export type SlabCreateWithoutCertificateInput = {
    id?: string
    status?: $Enums.SlabStatus
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nfcRecord?: NFCRecordCreateNestedOneWithoutSlabInput
  }

  export type SlabUncheckedCreateWithoutCertificateInput = {
    id?: string
    status?: $Enums.SlabStatus
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nfcRecord?: NFCRecordUncheckedCreateNestedOneWithoutSlabInput
  }

  export type SlabCreateOrConnectWithoutCertificateInput = {
    where: SlabWhereUniqueInput
    create: XOR<SlabCreateWithoutCertificateInput, SlabUncheckedCreateWithoutCertificateInput>
  }

  export type NFCRecordCreateWithoutCertificateInput = {
    id?: string
    identifier: string
    securityLevel?: $Enums.VerificationSecurityLevel
    tamperStatus?: $Enums.TamperStatus
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slab?: SlabCreateNestedOneWithoutNfcRecordInput
  }

  export type NFCRecordUncheckedCreateWithoutCertificateInput = {
    id?: string
    identifier: string
    securityLevel?: $Enums.VerificationSecurityLevel
    tamperStatus?: $Enums.TamperStatus
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slabId?: string | null
  }

  export type NFCRecordCreateOrConnectWithoutCertificateInput = {
    where: NFCRecordWhereUniqueInput
    create: XOR<NFCRecordCreateWithoutCertificateInput, NFCRecordUncheckedCreateWithoutCertificateInput>
  }

  export type QRRecordCreateWithoutCertificateInput = {
    id?: string
    publicToken: string
    active?: boolean
    scanCount?: number
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QRRecordUncheckedCreateWithoutCertificateInput = {
    id?: string
    publicToken: string
    active?: boolean
    scanCount?: number
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QRRecordCreateOrConnectWithoutCertificateInput = {
    where: QRRecordWhereUniqueInput
    create: XOR<QRRecordCreateWithoutCertificateInput, QRRecordUncheckedCreateWithoutCertificateInput>
  }

  export type GradingReportUpsertWithoutCertificateInput = {
    update: XOR<GradingReportUpdateWithoutCertificateInput, GradingReportUncheckedUpdateWithoutCertificateInput>
    create: XOR<GradingReportCreateWithoutCertificateInput, GradingReportUncheckedCreateWithoutCertificateInput>
    where?: GradingReportWhereInput
  }

  export type GradingReportUpdateToOneWithWhereWithoutCertificateInput = {
    where?: GradingReportWhereInput
    data: XOR<GradingReportUpdateWithoutCertificateInput, GradingReportUncheckedUpdateWithoutCertificateInput>
  }

  export type GradingReportUpdateWithoutCertificateInput = {
    id?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutGradingReportsNestedInput
  }

  export type GradingReportUncheckedUpdateWithoutCertificateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCertificatesInput = {
    update: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
    create: XOR<UserCreateWithoutCertificatesInput, UserUncheckedCreateWithoutCertificatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCertificatesInput, UserUncheckedUpdateWithoutCertificatesInput>
  }

  export type UserUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type SlabUpsertWithoutCertificateInput = {
    update: XOR<SlabUpdateWithoutCertificateInput, SlabUncheckedUpdateWithoutCertificateInput>
    create: XOR<SlabCreateWithoutCertificateInput, SlabUncheckedCreateWithoutCertificateInput>
    where?: SlabWhereInput
  }

  export type SlabUpdateToOneWithWhereWithoutCertificateInput = {
    where?: SlabWhereInput
    data: XOR<SlabUpdateWithoutCertificateInput, SlabUncheckedUpdateWithoutCertificateInput>
  }

  export type SlabUpdateWithoutCertificateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSlabStatusFieldUpdateOperationsInput | $Enums.SlabStatus
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nfcRecord?: NFCRecordUpdateOneWithoutSlabNestedInput
  }

  export type SlabUncheckedUpdateWithoutCertificateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSlabStatusFieldUpdateOperationsInput | $Enums.SlabStatus
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nfcRecord?: NFCRecordUncheckedUpdateOneWithoutSlabNestedInput
  }

  export type NFCRecordUpsertWithoutCertificateInput = {
    update: XOR<NFCRecordUpdateWithoutCertificateInput, NFCRecordUncheckedUpdateWithoutCertificateInput>
    create: XOR<NFCRecordCreateWithoutCertificateInput, NFCRecordUncheckedCreateWithoutCertificateInput>
    where?: NFCRecordWhereInput
  }

  export type NFCRecordUpdateToOneWithWhereWithoutCertificateInput = {
    where?: NFCRecordWhereInput
    data: XOR<NFCRecordUpdateWithoutCertificateInput, NFCRecordUncheckedUpdateWithoutCertificateInput>
  }

  export type NFCRecordUpdateWithoutCertificateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    securityLevel?: EnumVerificationSecurityLevelFieldUpdateOperationsInput | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFieldUpdateOperationsInput | $Enums.TamperStatus
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slab?: SlabUpdateOneWithoutNfcRecordNestedInput
  }

  export type NFCRecordUncheckedUpdateWithoutCertificateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    securityLevel?: EnumVerificationSecurityLevelFieldUpdateOperationsInput | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFieldUpdateOperationsInput | $Enums.TamperStatus
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slabId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QRRecordUpsertWithoutCertificateInput = {
    update: XOR<QRRecordUpdateWithoutCertificateInput, QRRecordUncheckedUpdateWithoutCertificateInput>
    create: XOR<QRRecordCreateWithoutCertificateInput, QRRecordUncheckedCreateWithoutCertificateInput>
    where?: QRRecordWhereInput
  }

  export type QRRecordUpdateToOneWithWhereWithoutCertificateInput = {
    where?: QRRecordWhereInput
    data: XOR<QRRecordUpdateWithoutCertificateInput, QRRecordUncheckedUpdateWithoutCertificateInput>
  }

  export type QRRecordUpdateWithoutCertificateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicToken?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    scanCount?: IntFieldUpdateOperationsInput | number
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QRRecordUncheckedUpdateWithoutCertificateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicToken?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    scanCount?: IntFieldUpdateOperationsInput | number
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateWithoutSlabInput = {
    id?: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingReport: GradingReportCreateNestedOneWithoutCertificateInput
    grader?: UserCreateNestedOneWithoutCertificatesInput
    nfcRecord?: NFCRecordCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateWithoutSlabInput = {
    id?: string
    gradingReportId: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    graderId?: string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nfcRecord?: NFCRecordUncheckedCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateCreateOrConnectWithoutSlabInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutSlabInput, CertificateUncheckedCreateWithoutSlabInput>
  }

  export type NFCRecordCreateWithoutSlabInput = {
    id?: string
    identifier: string
    securityLevel?: $Enums.VerificationSecurityLevel
    tamperStatus?: $Enums.TamperStatus
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificate: CertificateCreateNestedOneWithoutNfcRecordInput
  }

  export type NFCRecordUncheckedCreateWithoutSlabInput = {
    id?: string
    certificateId: string
    identifier: string
    securityLevel?: $Enums.VerificationSecurityLevel
    tamperStatus?: $Enums.TamperStatus
    lastVerifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NFCRecordCreateOrConnectWithoutSlabInput = {
    where: NFCRecordWhereUniqueInput
    create: XOR<NFCRecordCreateWithoutSlabInput, NFCRecordUncheckedCreateWithoutSlabInput>
  }

  export type CertificateUpsertWithoutSlabInput = {
    update: XOR<CertificateUpdateWithoutSlabInput, CertificateUncheckedUpdateWithoutSlabInput>
    create: XOR<CertificateCreateWithoutSlabInput, CertificateUncheckedCreateWithoutSlabInput>
    where?: CertificateWhereInput
  }

  export type CertificateUpdateToOneWithWhereWithoutSlabInput = {
    where?: CertificateWhereInput
    data: XOR<CertificateUpdateWithoutSlabInput, CertificateUncheckedUpdateWithoutSlabInput>
  }

  export type CertificateUpdateWithoutSlabInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingReport?: GradingReportUpdateOneRequiredWithoutCertificateNestedInput
    grader?: UserUpdateOneWithoutCertificatesNestedInput
    nfcRecord?: NFCRecordUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateWithoutSlabInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradingReportId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    graderId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nfcRecord?: NFCRecordUncheckedUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type NFCRecordUpsertWithoutSlabInput = {
    update: XOR<NFCRecordUpdateWithoutSlabInput, NFCRecordUncheckedUpdateWithoutSlabInput>
    create: XOR<NFCRecordCreateWithoutSlabInput, NFCRecordUncheckedCreateWithoutSlabInput>
    where?: NFCRecordWhereInput
  }

  export type NFCRecordUpdateToOneWithWhereWithoutSlabInput = {
    where?: NFCRecordWhereInput
    data: XOR<NFCRecordUpdateWithoutSlabInput, NFCRecordUncheckedUpdateWithoutSlabInput>
  }

  export type NFCRecordUpdateWithoutSlabInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    securityLevel?: EnumVerificationSecurityLevelFieldUpdateOperationsInput | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFieldUpdateOperationsInput | $Enums.TamperStatus
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificate?: CertificateUpdateOneRequiredWithoutNfcRecordNestedInput
  }

  export type NFCRecordUncheckedUpdateWithoutSlabInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateId?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    securityLevel?: EnumVerificationSecurityLevelFieldUpdateOperationsInput | $Enums.VerificationSecurityLevel
    tamperStatus?: EnumTamperStatusFieldUpdateOperationsInput | $Enums.TamperStatus
    lastVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateWithoutNfcRecordInput = {
    id?: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingReport: GradingReportCreateNestedOneWithoutCertificateInput
    grader?: UserCreateNestedOneWithoutCertificatesInput
    slab?: SlabCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateWithoutNfcRecordInput = {
    id?: string
    gradingReportId: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    graderId?: string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slab?: SlabUncheckedCreateNestedOneWithoutCertificateInput
    qrRecord?: QRRecordUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateCreateOrConnectWithoutNfcRecordInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutNfcRecordInput, CertificateUncheckedCreateWithoutNfcRecordInput>
  }

  export type SlabCreateWithoutNfcRecordInput = {
    id?: string
    status?: $Enums.SlabStatus
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    certificate: CertificateCreateNestedOneWithoutSlabInput
  }

  export type SlabUncheckedCreateWithoutNfcRecordInput = {
    id?: string
    certificateId: string
    status?: $Enums.SlabStatus
    model?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlabCreateOrConnectWithoutNfcRecordInput = {
    where: SlabWhereUniqueInput
    create: XOR<SlabCreateWithoutNfcRecordInput, SlabUncheckedCreateWithoutNfcRecordInput>
  }

  export type CertificateUpsertWithoutNfcRecordInput = {
    update: XOR<CertificateUpdateWithoutNfcRecordInput, CertificateUncheckedUpdateWithoutNfcRecordInput>
    create: XOR<CertificateCreateWithoutNfcRecordInput, CertificateUncheckedCreateWithoutNfcRecordInput>
    where?: CertificateWhereInput
  }

  export type CertificateUpdateToOneWithWhereWithoutNfcRecordInput = {
    where?: CertificateWhereInput
    data: XOR<CertificateUpdateWithoutNfcRecordInput, CertificateUncheckedUpdateWithoutNfcRecordInput>
  }

  export type CertificateUpdateWithoutNfcRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingReport?: GradingReportUpdateOneRequiredWithoutCertificateNestedInput
    grader?: UserUpdateOneWithoutCertificatesNestedInput
    slab?: SlabUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateWithoutNfcRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradingReportId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    graderId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slab?: SlabUncheckedUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type SlabUpsertWithoutNfcRecordInput = {
    update: XOR<SlabUpdateWithoutNfcRecordInput, SlabUncheckedUpdateWithoutNfcRecordInput>
    create: XOR<SlabCreateWithoutNfcRecordInput, SlabUncheckedCreateWithoutNfcRecordInput>
    where?: SlabWhereInput
  }

  export type SlabUpdateToOneWithWhereWithoutNfcRecordInput = {
    where?: SlabWhereInput
    data: XOR<SlabUpdateWithoutNfcRecordInput, SlabUncheckedUpdateWithoutNfcRecordInput>
  }

  export type SlabUpdateWithoutNfcRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSlabStatusFieldUpdateOperationsInput | $Enums.SlabStatus
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificate?: CertificateUpdateOneRequiredWithoutSlabNestedInput
  }

  export type SlabUncheckedUpdateWithoutNfcRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateId?: StringFieldUpdateOperationsInput | string
    status?: EnumSlabStatusFieldUpdateOperationsInput | $Enums.SlabStatus
    model?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateWithoutQrRecordInput = {
    id?: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gradingReport: GradingReportCreateNestedOneWithoutCertificateInput
    grader?: UserCreateNestedOneWithoutCertificatesInput
    slab?: SlabCreateNestedOneWithoutCertificateInput
    nfcRecord?: NFCRecordCreateNestedOneWithoutCertificateInput
  }

  export type CertificateUncheckedCreateWithoutQrRecordInput = {
    id?: string
    gradingReportId: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    graderId?: string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slab?: SlabUncheckedCreateNestedOneWithoutCertificateInput
    nfcRecord?: NFCRecordUncheckedCreateNestedOneWithoutCertificateInput
  }

  export type CertificateCreateOrConnectWithoutQrRecordInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutQrRecordInput, CertificateUncheckedCreateWithoutQrRecordInput>
  }

  export type CertificateUpsertWithoutQrRecordInput = {
    update: XOR<CertificateUpdateWithoutQrRecordInput, CertificateUncheckedUpdateWithoutQrRecordInput>
    create: XOR<CertificateCreateWithoutQrRecordInput, CertificateUncheckedCreateWithoutQrRecordInput>
    where?: CertificateWhereInput
  }

  export type CertificateUpdateToOneWithWhereWithoutQrRecordInput = {
    where?: CertificateWhereInput
    data: XOR<CertificateUpdateWithoutQrRecordInput, CertificateUncheckedUpdateWithoutQrRecordInput>
  }

  export type CertificateUpdateWithoutQrRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingReport?: GradingReportUpdateOneRequiredWithoutCertificateNestedInput
    grader?: UserUpdateOneWithoutCertificatesNestedInput
    slab?: SlabUpdateOneWithoutCertificateNestedInput
    nfcRecord?: NFCRecordUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateWithoutQrRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradingReportId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    graderId?: NullableStringFieldUpdateOperationsInput | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slab?: SlabUncheckedUpdateOneWithoutCertificateNestedInput
    nfcRecord?: NFCRecordUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    certificates?: CertificateCreateNestedManyWithoutGraderInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    displayName?: string | null
    role?: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    certificates?: CertificateUncheckedCreateNestedManyWithoutGraderInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    certificates?: CertificateUpdateManyWithoutGraderNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    certificates?: CertificateUncheckedUpdateManyWithoutGraderNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    cardId?: string | null
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type CertificateCreateManyGraderInput = {
    id?: string
    gradingReportId: string
    certificateNo: string
    serialNo: string
    status?: $Enums.CertificateStatus
    finalGrade?: Decimal | DecimalJsLike | number | string | null
    verificationHash?: string | null
    certifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    card?: CardUpdateOneWithoutSubmissionsNestedInput
    gradingReports?: GradingReportUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingReports?: GradingReportUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUpdateWithoutGraderInput = {
    id?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingReport?: GradingReportUpdateOneRequiredWithoutCertificateNestedInput
    slab?: SlabUpdateOneWithoutCertificateNestedInput
    nfcRecord?: NFCRecordUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateWithoutGraderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradingReportId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slab?: SlabUncheckedUpdateOneWithoutCertificateNestedInput
    nfcRecord?: NFCRecordUncheckedUpdateOneWithoutCertificateNestedInput
    qrRecord?: QRRecordUncheckedUpdateOneWithoutCertificateNestedInput
  }

  export type CertificateUncheckedUpdateManyWithoutGraderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gradingReportId?: StringFieldUpdateOperationsInput | string
    certificateNo?: StringFieldUpdateOperationsInput | string
    serialNo?: StringFieldUpdateOperationsInput | string
    status?: EnumCertificateStatusFieldUpdateOperationsInput | $Enums.CertificateStatus
    finalGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    verificationHash?: NullableStringFieldUpdateOperationsInput | string | null
    certifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateManySetInput = {
    id?: string
    name: string
    collectorNo?: string | null
    variant?: string | null
    language?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardUpdateWithoutSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateManyWithoutSetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    collectorNo?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyCardInput = {
    id?: string
    userId: string
    status?: $Enums.SubmissionStatus
    submittedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    gradingReports?: GradingReportUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gradingReports?: GradingReportUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubmissionStatusFieldUpdateOperationsInput | $Enums.SubmissionStatus
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GradingReportCreateManySubmissionInput = {
    id?: string
    methodologyVersion: string
    centering?: Decimal | DecimalJsLike | number | string | null
    corners?: Decimal | DecimalJsLike | number | string | null
    edges?: Decimal | DecimalJsLike | number | string | null
    surface?: Decimal | DecimalJsLike | number | string | null
    printQuality?: Decimal | DecimalJsLike | number | string | null
    whitening?: Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: Decimal | DecimalJsLike | number | string | null
    humanGrade?: Decimal | DecimalJsLike | number | string | null
    finalizedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GradingReportUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificate?: CertificateUpdateOneWithoutGradingReportNestedInput
  }

  export type GradingReportUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    certificate?: CertificateUncheckedUpdateOneWithoutGradingReportNestedInput
  }

  export type GradingReportUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    methodologyVersion?: StringFieldUpdateOperationsInput | string
    centering?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    corners?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    edges?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surface?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    printQuality?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    whitening?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    defects?: NullableJsonNullValueInput | InputJsonValue
    proposedGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    humanGrade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    finalizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}