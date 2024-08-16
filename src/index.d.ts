declare class RateYourCustomer {
    constructor(apiKey: string, baseUrl?: string);
  
    trackEvent(eventType: string, payload: any): Promise<any>;
  
    trackPaymentReceived(customerId: string, userId: string, amount: number, currency: string, paymentDate: string): Promise<any>;
    trackPaymentMissed(customerId: string, userId: string, amount: number, currency: string, dueDate: string): Promise<any>;
    trackPaymentTermsChanged(customerId: string, userId: string, oldTerms: any, newTerms: any, changeDate: string): Promise<any>;
    trackOrderPlaced(customerId: string, userId: string, orderId: string, total: number, items: any[]): Promise<any>;
    trackOrderUpdated(customerId: string, userId: string, orderId: string, changes: any): Promise<any>;
    trackOrderCancelled(customerId: string, userId: string, orderId: string, reason: string): Promise<any>;
    trackLifetimeValueUpdated(customerId: string, userId: string, oldValue: number, newValue: number): Promise<any>;
    trackLifetimeValueCalculated(customerId: string, userId: string, value: number, calculationDate: string): Promise<any>;
    trackProductUsageUpdated(customerId: string, userId: string, productId: string, usageMetrics: any): Promise<any>;
    trackFeatureUsageDeclined(customerId: string, userId: string, featureId: string, declinePercentage: number): Promise<any>;
    trackPurchaseFrequencyChanged(customerId: string, userId: string, oldFrequency: number, newFrequency: number): Promise<any>;
    trackRenewalRateUpdated(customerId: string, userId: string, oldRate: number, newRate: number): Promise<any>;
    trackRenewalRiskIdentified(customerId: string, userId: string, riskLevel: string, riskFactors: any): Promise<any>;
    trackReturnRateUpdated(customerId: string, userId: string, oldRate: number, newRate: number): Promise<any>;
    trackSupportTicketCreated(customerId: string, userId: string, ticketId: string, subject: string): Promise<any>;
    trackSupportTicketResolved(customerId: string, userId: string, ticketId: string, resolution: string): Promise<any>;
    trackUpsellOpportunityCreated(customerId: string, userId: string, opportunityId: string, product: any): Promise<any>;
    trackUpsellOpportunityLost(customerId: string, userId: string, opportunityId: string, reason: string): Promise<any>;
    trackCustomerEngagementUpdated(customerId: string, userId: string, engagementMetrics: any): Promise<any>;
    trackCustomerSuccessUpdated(customerId: string, userId: string, successMetrics: any): Promise<any>;
    trackSuccessMilestoneAchieved(customerId: string, userId: string, milestone: string): Promise<any>;
    trackFeedbackScoreUpdated(customerId: string, userId: string, oldScore: number, newScore: number): Promise<any>;
    trackDataSyncCompleted(customerId: string, userId: string, syncDetails: any): Promise<any>;
    trackContractCreated(customerId: string, userId: string, contractId: string, terms: any): Promise<any>;
    trackContractUpdated(customerId: string, userId: string, contractId: string, changes: any): Promise<any>;
    trackContractTerminated(customerId: string, userId: string, contractId: string, reason: string): Promise<any>;
    trackAccountHealthUpdated(customerId: string, userId: string, oldHealth: string, newHealth: string): Promise<any>;
    trackAccountAtRisk(customerId: string, userId: string, riskFactors: any): Promise<any>;
    trackResourceDownloaded(customerId: string, userId: string, resourceId: string, resourceType: string): Promise<any>;
    trackSupportArticleViewed(customerId: string, userId: string, articleId: string, articleTitle: string): Promise<any>;
    trackAverageOrderValueUpdated(customerId: string, userId: string, oldValue: number, newValue: number): Promise<any>;
    trackCustomerRatingUpdated(customerId: string, userId: string, oldRating: number, newRating: number): Promise<any>;
  }
  
  export default RateYourCustomer;