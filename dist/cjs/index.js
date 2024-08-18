"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class RateYourCustomer {
    apiKey;
    baseUrl;
    constructor(apiKey, baseUrl = 'http://localhost:3002/api') {
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
    }
    async trackEvent(eventType, payload) {
        try {
            const response = await axios_1.default.post(`${this.baseUrl}/webhook-event`, { eventType, ...payload }, { headers: { 'x-api-key': this.apiKey } });
            console.log(`Event ${eventType} sent successfully`);
            return response.data;
        }
        catch (error) {
            if (axios_1.default.isAxiosError(error)) {
                console.error(`Error sending event ${eventType}:`, error.response?.data || error.message);
            }
            else {
                console.error(`Unknown error sending event ${eventType}:`, error);
            }
            throw error;
        }
    }
    async trackPaymentReceived(customerId, amount, paymentDate) {
        const payload = { customerId, additionalData: { amount, paymentDate } };
        return this.trackEvent('PAYMENT_RECEIVED', payload);
    }
    async trackPaymentMissed(customerId, missedDate) {
        const payload = { customerId, additionalData: { missedDate } };
        return this.trackEvent('PAYMENT_MISSED', payload);
    }
    async trackPaymentTermsChanged(customerId, newTerms, updatedDate) {
        const payload = { customerId, additionalData: { newTerms, updatedDate } };
        return this.trackEvent('PAYMENT_TERMS_CHANGED', payload);
    }
    async trackOrderPlaced(customerId, orderValue, orderDate, status) {
        const payload = { customerId, additionalData: {}, orderValue, orderDate, status };
        return this.trackEvent('ORDER_PLACED', payload);
    }
    async trackOrderUpdated(customerId, orderId, updatedFields) {
        const payload = { customerId, additionalData: { orderId, updatedFields } };
        return this.trackEvent('ORDER_UPDATED', payload);
    }
    async trackOrderCancelled(customerId, orderId, cancelDate) {
        const payload = { customerId, additionalData: { orderId, cancelDate } };
        return this.trackEvent('ORDER_CANCELLED', payload);
    }
    async trackLifetimeValueUpdated(customerId, totalRevenue, startDate, endDate, details) {
        const payload = { customerId, additionalData: { totalRevenue, startDate, endDate, details }
        };
        return this.trackEvent('LIFETIME_VALUE_UPDATED', payload);
    }
    async trackLifetimeValueCalculated(customerId, totalRevenue, startDate, endDate, details) {
        const payload = { customerId, additionalData: { totalRevenue, startDate, endDate, details } };
        return this.trackEvent('LIFETIME_VALUE_CALCULATED', payload);
    }
    async trackProductUsageUpdated(customerId, featureUsed, usageDuration, usageDate) {
        const payload = { customerId, additionalData: { featureUsed, usageDuration, usageDate } };
        return this.trackEvent('PRODUCT_USAGE_UPDATED', payload);
    }
    async trackFeatureUsageDeclined(customerId, featureUsed, declineReason, declineDate) {
        const payload = { customerId, additionalData: { featureUsed, declineReason, declineDate } };
        return this.trackEvent('FEATURE_USAGE_DECLINED', payload);
    }
    async trackPurchaseFrequencyChanged(customerId, numberOfPurchases, purchaseDates, Frequency) {
        const payload = { customerId, additionalData: { numberOfPurchases, purchaseDates, Frequency } };
        return this.trackEvent('PURCHASE_FREQUENCY_CHANGED', payload);
    }
    async trackRenewalRateUpdated(customerId, renewalRate, lastRenewalUpdate) {
        const payload = { customerId, additionalData: { renewalRate, lastRenewalUpdate } };
        return this.trackEvent('RENEWAL_RATE_UPDATED', payload);
    }
    async trackRenewalRiskIdentified(customerId, riskDetails, identifiedDate) {
        const payload = { customerId, additionalData: { riskDetails, identifiedDate } };
        return this.trackEvent('RENEWAL_RISK_IDENTIFIED', payload);
    }
    async trackReturnRateUpdated(customerId, numberOfReturns, totalOrders, returnDates, returnDetails) {
        const payload = { customerId, additionalData: { numberOfReturns, totalOrders, returnDates, returnDetails } };
        return this.trackEvent('RETURN_RATE_UPDATED', payload);
    }
    async trackSupportTicketCreated(customerId, ticketId, createdAt) {
        const payload = { customerId, additionalData: { ticketId, createdAt } };
        return this.trackEvent('SUPPORT_TICKET_CREATED', payload);
    }
    async trackSupportTicketResolved(customerId, ticketId, resolvedAt, satisfactionScore) {
        const payload = { customerId, additionalData: { ticketId, resolvedAt, satisfactionScore } };
        return this.trackEvent('SUPPORT_TICKET_RESOLVED', payload);
    }
    async trackUpsellOpportunityCreated(customerId, description, value, status) {
        const payload = { customerId, additionalData: { description, value, status } };
        return this.trackEvent('UPSELL_OPPORTUNITY_CREATED', payload);
    }
    async trackUpsellOpportunityLost(customerId, lossReason, lossDate) {
        const payload = { customerId, additionalData: { lossReason, lossDate } };
        return this.trackEvent('UPSELL_OPPORTUNITY_LOST', payload);
    }
    async trackCustomerEngagementUpdated(customerId, engagementScore, lastEngaged, details) {
        const payload = { customerId, additionalData: { engagementScore, lastEngaged, details } };
        return this.trackEvent('CUSTOMER_ENGAGEMENT_UPDATED', payload);
    }
    async trackCustomerSuccessUpdated(customerId, successScore, milestone, achievedAt, details) {
        const payload = { customerId, additionalData: { successScore, milestone, achievedAt, details } };
        return this.trackEvent('CUSTOMER_SUCCESS_UPDATED', payload);
    }
    async trackSuccessMilestoneAchieved(customerId, achievedAt, milestone, details) {
        const payload = { customerId, additionalData: { achievedAt, details, milestone } };
        return this.trackEvent('SUCCESS_MILESTONE_ACHIEVED', payload);
    }
    async trackFeedbackScoreUpdated(customerId, userId, oldScore, newScore) {
        const payload = { customerId, additionalData: { userId, oldScore, newScore } };
        return this.trackEvent('FEEDBACK_SCORE_UPDATED', payload);
    }
    async trackDataSyncCompleted(customerId, userId, syncDetails) {
        const payload = { customerId, additionalData: { userId, syncDetails }, userId, syncDetails };
        return this.trackEvent('DATA_SYNC_COMPLETED', payload);
    }
    async trackContractCreated(customerId, feedbackScore, feedbackDate, feedbackType, details) {
        const payload = { customerId, additionalData: { feedbackDate, feedbackScore, feedbackType, details } };
        return this.trackEvent('CONTRACT_CREATED', payload);
    }
    async trackContractUpdated(customerId, contracLength, startDate, endDate, renewalDate, updatedDate) {
        const payload = { customerId, additionalData: { contracLength, startDate, endDate, renewalDate, updatedDate } };
        return this.trackEvent('CONTRACT_UPDATED', payload);
    }
    async trackContractTerminated(customerId, terminationDetails, terminationDate) {
        const payload = { customerId, additionalData: { terminationDate, terminationDetails } };
        return this.trackEvent('CONTRACT_TERMINATED', payload);
    }
    async trackAccountHealthUpdated(customerId, healthScore, status, details, updatedDate) {
        const payload = { customerId, additionalData: { healthScore, status, details, updatedDate } };
        return this.trackEvent('ACCOUNT_HEALTH_UPDATED', payload);
    }
    // async trackAccountAtRisk(customerId: number , userId: string, riskFactors: any) {
    //     const payload = { customerId, userId, riskFactors };
    //     return this.trackEvent('ACCOUNT_AT_RISK', payload);
    //}
    async trackResourceDownloaded(customerId, resourceId, downloadDate) {
        const payload = { customerId, additionalData: { resourceId, downloadDate } };
        return this.trackEvent('RESOURCE_DOWNLOADED', payload);
    }
    async trackSupportArticleViewed(customerId, articleId, viewDate) {
        const payload = { customerId, additionalData: { articleId, viewDate } };
        return this.trackEvent('SUPPORT_ARTICLE_VIEWED', payload);
    }
}
exports.default = RateYourCustomer;
