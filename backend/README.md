# EnterpriseRetail.Api

Backend สำหรับ Enterprise E-Commerce & Retail Management Platform

## Commit

`BE-CORE-001` — `chore(backend): initialize project structure`

## Module Structure

| Folder | Namespace | Responsibility |
|---|---|---|
| `API-AUTH-001` | `EnterpriseRetail.Api.API_AUTH_001` | Authentication |
| `API-USER-001` | `EnterpriseRetail.Api.API_USER_001` | Users |
| `API-ROLE-001` | `EnterpriseRetail.Api.API_ROLE_001` | Roles and Permissions |
| `API-PROD-001` | `EnterpriseRetail.Api.API_PROD_001` | Products |
| `API-INV-001` | `EnterpriseRetail.Api.API_INV_001` | Inventory |
| `API-CART-001` | `EnterpriseRetail.Api.API_CART_001` | Cart and Checkout |
| `API-SALE-001` | `EnterpriseRetail.Api.API_SALE_001` | Orders and Sales |
| `API-PAY-001` | `EnterpriseRetail.Api.API_PAY_001` | Payments |
| `API-RECON-001` | `EnterpriseRetail.Api.API_RECON_001` | Reconciliation |
| `API-AUDIT-001` | `EnterpriseRetail.Api.API_AUDIT_001` | Audit Log |
| `API-DASH-001` | `EnterpriseRetail.Api.API_DASH_001` | Dashboard |
| `SHR-CORE-001` | `EnterpriseRetail.Api.SHR_CORE_001` | Shared Core |
| `SHR-SEC-001` | `EnterpriseRetail.Api.SHR_SEC_001` | Shared Security |
| `DB-CORE-001` | `EnterpriseRetail.Api.DB_CORE_001` | Database Core |

## Run

```bash
dotnet restore
dotnet run
```

เปิด Swagger ที่:

```text
https://localhost:<port>/swagger
```

> Commit นี้ยังไม่รวม Authentication, PostgreSQL, EF Core หรือ Business Logic
