import axios, { AxiosError } from 'axios';

class RateYourCustomer {
    apiKey: string;
    baseUrl: string;

    constructor(apiKey: string, baseUrl = 'https://rateyourcustomer.vercel.app/api') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }

    async trackEvent(eventType: string, payload: any): Promise<any> {
        try {
            const response = await axios.post(
                `${this.baseUrl}/webhook-event`,
                { eventType, ...payload },
                { headers: { 'x-api-key': this.apiKey } }
            );
            console.log(`Event ${eventType} sent successfully`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(`Error sending event ${eventType}:`, error.response?.data || error.message);
            } else {
                console.error(`Unknown error sending event ${eventType}:`, error);
            }
            throw error;
        }
    }

    async trackPaymentReceived(customerId: string, userId: string, amount: number, currency: string, paymentDate: Date) {
        const payload = { customerId, userId, amount, currency, paymentDate };
        return this.trackEvent('PAYMENT_RECEIVED', payload);
    }

    async trackPaymentMissed(customerId: string, userId: string, amount: number, currency: string, dueDate: Date) {
        const payload = { customerId, userId, amount, currency, dueDate };
        return this.trackEvent('PAYMENT_MISSED', payload);
    }

    async trackPaymentTermsChanged(customerId: string, userId: string, oldTerms: string, newTerms: string, changeDate: Date) {
        const payload = { customerId, userId, oldTerms, newTerms, changeDate };
        return this.trackEvent('PAYMENT_TERMS_CHANGED', payload);
    }

    async trackOrderPlaced(customerId: string, userId: string, orderId: string, total: number, items: any[]) {
        const payload = { customerId, userId, orderId, total, items };
        return this.trackEvent('ORDER_PLACED', payload);
    }

    async trackOrderUpdated(customerId: string, userId: string, orderId: string, changes: any) {
        const payload = { customerId, userId, orderId, changes };
        return this.trackEvent('ORDER_UPDATED', payload);
    }

    async trackOrderCancelled(customerId: string, userId: string, orderId: string, reason: string) {
        const payload = { customerId, userId, orderId, reason };
        return this.trackEvent('ORDER_CANCELLED', payload);
    }

    async trackLifetimeValueUpdated(customerId: string, userId: string, oldValue: number, newValue: number) {
        const payload = { customerId, userId, oldValue, newValue };
        return this.trackEvent('LIFETIME_VALUE_UPDATED', payload);
    }

    async trackLifetimeValueCalculated(customerId: string, userId: string, value: number, calculationDate: Date) {
        const payload = { customerId, userId, value, calculationDate };
        return this.trackEvent('LIFETIME_VALUE_CALCULATED', payload);
    }

    async trackProductUsageUpdated(customerId: string, userId: string, productId: string, usageMetrics: any) {
        const payload = { customerId, userId, productId, usageMetrics };
        return this.trackEvent('PRODUCT_USAGE_UPDATED', payload);
    }

    async trackFeatureUsageDeclined(customerId: string, userId: string, featureId: string, declinePercentage: number) {
        const payload = { customerId, userId, featureId, declinePercentage };
        return this.trackEvent('FEATURE_USAGE_DECLINED', payload);
    }

    async trackPurchaseFrequencyChanged(customerId: string, userId: string, oldFrequency: number, newFrequency: number) {
        const payload = { customerId, userId, oldFrequency, newFrequency };
        return this.trackEvent('PURCHASE_FREQUENCY_CHANGED', payload);
    }

    async trackRenewalRateUpdated(customerId: string, userId: string, oldRate: number, newRate: number) {
        const payload = { customerId, userId, oldRate, newRate };
        return this.trackEvent('RENEWAL_RATE_UPDATED', payload);
    }

    async trackRenewalRiskIdentified(customerId: string, userId: string, riskLevel: string, riskFactors: any) {
        const payload = { customerId, userId, riskLevel, riskFactors };
        return this.trackEvent('RENEWAL_RISK_IDENTIFIED', payload);
    }

    async trackReturnRateUpdated(customerId: string, userId: string, oldRate: number, newRate: number) {
        const payload = { customerId, userId, oldRate, newRate };
        return this.trackEvent('RETURN_RATE_UPDATED', payload);
    }

    async trackSupportTicketCreated(customerId: string, userId: string, ticketId: string, subject: string) {
        const payload = { customerId, userId, ticketId, subject };
        return this.trackEvent('SUPPORT_TICKET_CREATED', payload);
    }

    async trackSupportTicketResolved(customerId: string, userId: string, ticketId: string, resolution: string) {
        const payload = { customerId, userId, ticketId, resolution };
        return this.trackEvent('SUPPORT_TICKET_RESOLVED', payload);
    }

    async trackUpsellOpportunityCreated(customerId: string, userId: string, opportunityId: string, product: any) {
        const payload = { customerId, userId, opportunityId, product };
        return this.trackEvent('UPSELL_OPPORTUNITY_CREATED', payload);
    }

    async trackUpsellOpportunityLost(customerId: string, userId: string, opportunityId: string, reason: string) {
        const payload = { customerId, userId, opportunityId, reason };
        return this.trackEvent('UPSELL_OPPORTUNITY_LOST', payload);
    }

    async trackCustomerEngagementUpdated(customerId: string, userId: string, engagementMetrics: any) {
        const payload = { customerId, userId, engagementMetrics };
        return this.trackEvent('CUSTOMER_ENGAGEMENT_UPDATED', payload);
    }

    async trackCustomerSuccessUpdated(customerId: string, userId: string, successMetrics: any) {
        const payload = { customerId, userId, successMetrics };
        return this.trackEvent('CUSTOMER_SUCCESS_UPDATED', payload);
    }

    async trackSuccessMilestoneAchieved(customerId: string, userId: string, milestone: string) {
        const payload = { customerId, userId, milestone };
        return this.trackEvent('SUCCESS_MILESTONE_ACHIEVED', payload);
    }

    async trackFeedbackScoreUpdated(customerId: string, userId: string, oldScore: number, newScore: number) {
        const payload = { customerId, userId, oldScore, newScore };
        return this.trackEvent('FEEDBACK_SCORE_UPDATED', payload);
    }

    async trackDataSyncCompleted(customerId: string, userId: string, syncDetails: any) {
        const payload = { customerId, userId, syncDetails };
        return this.trackEvent('DATA_SYNC_COMPLETED', payload);
    }

    async trackContractCreated(customerId: string, userId: string, contractId: string, terms: any) {
        const payload = { customerId, userId, contractId, terms };
        return this.trackEvent('CONTRACT_CREATED', payload);
    }

    async trackContractUpdated(customerId: string, userId: string, contractId: string, changes: any) {
        const payload = { customerId, userId, contractId, changes };
        return this.trackEvent('CONTRACT_UPDATED', payload);
    }

    async trackContractTerminated(customerId: string, userId: string, contractId: string, reason: string) {
        const payload = { customerId, userId, contractId, reason };
        return this.trackEvent('CONTRACT_TERMINATED', payload);
    }

    async trackAccountHealthUpdated(customerId: string, userId: string, oldHealth: any, newHealth: any) {
        const payload = { customerId, userId, oldHealth, newHealth };
        return this.trackEvent('ACCOUNT_HEALTH_UPDATED', payload);
    }

    async trackAccountAtRisk(customerId: string, userId: string, riskFactors: any) {
        const payload = { customerId, userId, riskFactors };
        return this.trackEvent('ACCOUNT_AT_RISK', payload);
    }

    async trackResourceDownloaded(customerId: string, userId: string, resourceId: string, resourceType: string) {
        const payload = { customerId, userId, resourceId, resourceType };
        return this.trackEvent('RESOURCE_DOWNLOADED', payload);
    }

    async trackSupportArticleViewed(customerId: string, userId: string, articleId: string, articleTitle: string) {
        const payload = { customerId, userId, articleId, articleTitle };
        return this.trackEvent('SUPPORT_ARTICLE_VIEWED', payload);
    }

}

export default RateYourCustomer;
module.exports = RateYourCustomer;
