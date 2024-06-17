interface Company {
    companyId: string
}

export interface LoyaltyLevel {
    number: number
    name: string
    requiredSum: number
    markToCash: number
    cashToMark: number
}

export interface CustomerMarkParameters {
    loyaltyLevel: LoyaltyLevel
    mark: number
}

export interface MobileAppDashboard {
    companyName: string
    logo: string
    backgroundColor: string
    mainColor: string
    cardBackgroundColor: string
    textColor: string
    highlightTextColor: string
    accentColor: string
}

export interface CompanyData {
    company: Company
    customerMarkParameters: CustomerMarkParameters
    mobileAppDashboard: MobileAppDashboard
}

export interface ApiResponse {
    companies: CompanyData[]
    limit: number
    offset: number
}

export type FetchProps = {
    offset?: number
    limit?: number
}
