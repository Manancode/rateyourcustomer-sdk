// types.d.ts

declare module 'rate-your-customer-sdk' {
  export default class RateYourCustomer {
    constructor(apiKey: string, baseUrl?: string);

    trackEvent(eventType: string, payload: any): Promise<any>;

    trackPaymentReceived(customerId: number, additionalData: { amount: number; paymentDate: string }): Promise<any>;

    trackPaymentMissed(customerId: number, additionalData: { missedDate: string }): Promise<any>;

    trackPaymentTermsChanged(
      customerId: number,
      additionalData: { newTerms: string; updatedDate: string }
    ): Promise<any>;

    trackOrderPlaced(
      customerId: number,
      additionalData: { orderValue: number; orderDate: string; status: string }
    ): Promise<any>;

    trackOrderUpdated(
      customerId: number,
      additionalData: { orderId: string; updatedFields: any }
    ): Promise<any>;

    trackOrderCancelled(customerId: number, additionalData: { orderId: string; cancelDate: string }): Promise<any>;

    trackLifetimeValueUpdated(
      customerId: number,
      additionalData: { totalRevenue: number; startDate: string; endDate: string; details: any }
    ): Promise<any>;

    trackLifetimeValueCalculated(
      customerId: number,
      additionalData: { totalRevenue: number; startDate: string; endDate: string; details: any }
    ): Promise<any>;

    trackProductUsageUpdated(
      customerId: number,
      additionalData: { featureUsed: string; usageDuration: number; usageDate: string }
    ): Promise<any>;

    trackFeatureUsageDeclined(
      customerId: number,
      additionalData: { featureUsed: string; declineReason: string; declineDate: string }
    ): Promise<any>;

    trackPurchaseFrequencyChanged(
      customerId: number,
      additionalData: { numberOfPurchases: number; purchaseDates: any; Frequency: string }
    ): Promise<any>;

    trackRenewalRateUpdated(
      customerId: number,
      additionalData: { renewalRate: number; lastRenewalUpdate: string }
    ): Promise<any>;

    trackRenewalRiskIdentified(
      customerId: number,
      additionalData: { riskDetails: string; identifiedDate: string }
    ): Promise<any>;

    trackReturnRateUpdated(
      customerId: number,
      additionalData: {
        numberOfReturns: number;
        totalOrders: number;
        returnDates: any;
        returnDetails: any;
      }
    ): Promise<any>;

    trackSupportTicketCreated(
      customerId: number,
      additionalData: { ticketId: string; createdAt: string }
    ): Promise<any>;

    trackSupportTicketResolved(
      customerId: number,
      additionalData: { ticketId: string; resolvedAt: string; satisfactionScore: number }
    ): Promise<any>;

    trackUpsellOpportunityCreated(
      customerId: number,
      additionalData: { description: string; value: number; status: string }
    ): Promise<any>;

    trackUpsellOpportunityLost(
      customerId: number,
      additionalData: { lossReason: string; lossDate: string }
    ): Promise<any>;

    trackCustomerEngagementUpdated(
      customerId: number,
      additionalData: { engagementScore: number; lastEngaged: string; details: any }
    ): Promise<any>;

    trackCustomerSuccessUpdated(
      customerId: number,
      additionalData: { successScore: number; milestone: string; achievedAt: string; details: any }
    ): Promise<any>;

    trackSuccessMilestoneAchieved(
      customerId: number,
      additionalData: { achievedAt: string; milestone: string; details: any }
    ): Promise<any>;

    trackFeedbackScoreUpdated(
      customerId: number,
      additionalData: { userId: string; oldScore: number; newScore: number }
    ): Promise<any>;

    trackDataSyncCompleted(
      customerId: number,
      additionalData: { userId: string; syncDetails: any }
    ): Promise<any>;

    trackContractCreated(
      customerId: number,
      additionalData: { feedbackScore: number; feedbackDate: string; feedbackType: string; details: any }
    ): Promise<any>;

    trackContractUpdated(
      customerId: number,
      additionalData: {
        contracLength: number;
        startDate: string;
        endDate: string;
        renewalDate: string;
        updatedDate: string;
      }
    ): Promise<any>;

    trackContractTerminated(
      customerId: number,
      additionalData: { terminationDetails: string; terminationDate: string }
    ): Promise<any>;

    trackAccountHealthUpdated(
      customerId: number,
      additionalData: { healthScore: number; status: string; details: any; updatedDate: string }
    ): Promise<any>;

    trackResourceDownloaded(
      customerId: number,
      additionalData: { resourceId: string; downloadDate: string }
    ): Promise<any>;

    trackSupportArticleViewed(
      customerId: number,
      additionalData: { articleId: string; viewDate: string }
    ): Promise<any>;
  }
}
