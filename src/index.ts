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

    async trackPaymentReceived( customerId: number, amount: number, paymentDate: string) {
        const payload = { customerId , additionalData : {amount, paymentDate } };
        return this.trackEvent('PAYMENT_RECEIVED', payload);                                                            
    }

    async trackPaymentMissed(  customerId: number, missedDate: string) {
        const payload = { customerId , additionalData : {missedDate} };
        return this.trackEvent('PAYMENT_MISSED', payload);
    }

    async trackPaymentTermsChanged(customerId: number, newTerms: string, updatedDate: string) {
        const payload = { customerId, additionalData: {newTerms , updatedDate} };
        return this.trackEvent('PAYMENT_TERMS_CHANGED', payload);
    }

    async trackOrderPlaced(customerId: number, orderValue : number , orderDate : string  , status: string) {
        const payload = { customerId, additionalData : {}, orderValue , orderDate , status };
        return this.trackEvent('ORDER_PLACED', payload);
    }

    async trackOrderUpdated(customerId: number, orderId: string, updatedFields: any) {
        const payload = { customerId,additionalData : {orderId, updatedFields }};
        return this.trackEvent('ORDER_UPDATED', payload);
    }

    async trackOrderCancelled(customerId: number , orderId: string, cancelDate : string) {
        const payload = { customerId, additionalData : {orderId, cancelDate}};
        return this.trackEvent('ORDER_CANCELLED', payload);
    }

    async trackLifetimeValueUpdated(customerId: number, totalRevenue : number ,  startDate : string , endDate : string , details : any) {
        const payload = { customerId,additionalData : {totalRevenue , startDate , endDate , details}
        };
        return this.trackEvent('LIFETIME_VALUE_UPDATED', payload);
    }

    async trackLifetimeValueCalculated(customerId: number, totalRevenue : number ,  startDate : string , endDate : string , details : any) {
        const payload = { customerId,additionalData : {totalRevenue , startDate , endDate , details}};
        return this.trackEvent('LIFETIME_VALUE_CALCULATED', payload);
    }

    async trackProductUsageUpdated(customerId: number, featureUsed : string , usageDuration : number , usageDate : string) {
        const payload = { customerId, additionalData : {featureUsed , usageDuration , usageDate}};
        return this.trackEvent('PRODUCT_USAGE_UPDATED', payload);
    }

    async trackFeatureUsageDeclined(customerId: number, featureUsed : string , declineReason: string, declineDate: string) {
        const payload = { customerId, additionalData : {featureUsed , declineReason , declineDate }};
        return this.trackEvent('FEATURE_USAGE_DECLINED', payload);
    }

    async trackPurchaseFrequencyChanged(customerId: number , numberOfPurchases : number , purchaseDates : any , Frequency: string) {
        const payload = { customerId, additionalData : {numberOfPurchases , purchaseDates , Frequency}};
        return this.trackEvent('PURCHASE_FREQUENCY_CHANGED', payload);
    }

    async trackRenewalRateUpdated(customerId: number, renewalRate : number , lastRenewalUpdate: string) {
        const payload = { customerId,additionalData : {renewalRate , lastRenewalUpdate} };
        return this.trackEvent('RENEWAL_RATE_UPDATED', payload);
    }

    async trackRenewalRiskIdentified(customerId: number, riskDetails: string, identifiedDate: string) {
        const payload = { customerId,additionalData : {riskDetails , identifiedDate} };
        return this.trackEvent('RENEWAL_RISK_IDENTIFIED', payload);
    }

    async trackReturnRateUpdated(customerId: number, numberOfReturns : number , totalOrders : Number , returnDates: any , returnDetails : any ) {
        const payload = { customerId, additionalData : {numberOfReturns , totalOrders , returnDates , returnDetails}};
        return this.trackEvent('RETURN_RATE_UPDATED', payload);
    }

    async trackSupportTicketCreated(customerId: number, ticketId: string, createdAt : string) {
        const payload = { customerId,additionalData : {ticketId , createdAt}  };
        return this.trackEvent('SUPPORT_TICKET_CREATED', payload);
    }

    async trackSupportTicketResolved(customerId: number , ticketId: string, resolvedAt: string , satisfactionScore : number ) {
        const payload = { customerId,additionalData : {ticketId , resolvedAt , satisfactionScore} };
        return this.trackEvent('SUPPORT_TICKET_RESOLVED', payload);
    }

    async trackUpsellOpportunityCreated(customerId: number, description : string ,  value : number, status : string) {
        const payload = { customerId,additionalData : {description , value , status} };
        return this.trackEvent('UPSELL_OPPORTUNITY_CREATED', payload);
    }

    async trackUpsellOpportunityLost(customerId: number, lossReason: string, lossDate: string) {
        const payload = { customerId, additionalData : {lossReason , lossDate }};
        return this.trackEvent('UPSELL_OPPORTUNITY_LOST', payload);
    }

    async trackCustomerEngagementUpdated(customerId: number , engagementScore: number , lastEngaged : string , details : any) {
        const payload = { customerId,additionalData : {engagementScore , lastEngaged , details} };
        return this.trackEvent('CUSTOMER_ENGAGEMENT_UPDATED', payload);
    }

    async trackCustomerSuccessUpdated(customerId: number, successScore : number , milestone : string , achievedAt : string , details : any) {
        const payload = { customerId,additionalData : { successScore , milestone , achievedAt , details}};
        return this.trackEvent('CUSTOMER_SUCCESS_UPDATED', payload);
    }

    async trackSuccessMilestoneAchieved(customerId: number, achievedAt: string, milestone: string , details : any) {
        const payload = { customerId,additionalData : { achievedAt , details , milestone} };
        return this.trackEvent('SUCCESS_MILESTONE_ACHIEVED', payload);
    }

    async trackFeedbackScoreUpdated(customerId: string, userId: string, oldScore: number, newScore: number) {
        const payload = { customerId,additionalData : { userId, oldScore, newScore} };
        return this.trackEvent('FEEDBACK_SCORE_UPDATED', payload);
    }

    async trackDataSyncCompleted(customerId: string, userId: string, syncDetails: any) {
        const payload = { customerId, additionalData : {userId, syncDetails},userId, syncDetails };
        return this.trackEvent('DATA_SYNC_COMPLETED', payload);
    }

    async trackContractCreated(customerId: number , feedbackScore :number , feedbackDate : string , feedbackType : string , details : any) {
        const payload = { customerId,additionalData : {feedbackDate , feedbackScore , feedbackType , details}};
        return this.trackEvent('CONTRACT_CREATED', payload);
    }

    async trackContractUpdated(customerId: number, contracLength : number , startDate: string , endDate : string, renewalDate: string , updatedDate : string) {
        const payload = { customerId,additionalData : { contracLength , startDate , endDate , renewalDate , updatedDate}};
        return this.trackEvent('CONTRACT_UPDATED', payload);
    }

    async trackContractTerminated(customerId: number ,terminationDetails : string , terminationDate : string) {
        const payload = { customerId, additionalData : {terminationDate , terminationDetails}};
        return this.trackEvent('CONTRACT_TERMINATED', payload);
    }

    async trackAccountHealthUpdated(customerId: number , healthScore: number , status : string , details : any , updatedDate : string) {
        const payload = { customerId,additionalData : {healthScore , status , details , updatedDate} };
        return this.trackEvent('ACCOUNT_HEALTH_UPDATED', payload);
    }

    // async trackAccountAtRisk(customerId: number , userId: string, riskFactors: any) {
    //     const payload = { customerId, userId, riskFactors };
    //     return this.trackEvent('ACCOUNT_AT_RISK', payload);
    //}

    async trackResourceDownloaded(customerId: number ,  resourceId: string, downloadDate : string , ) {
        const payload = { customerId,additionalData : {resourceId, downloadDate}  };
        return this.trackEvent('RESOURCE_DOWNLOADED', payload);
    }

    async trackSupportArticleViewed(customerId: number, articleId: string, viewDate : string , ) {
        const payload = { customerId,additionalData : {articleId, viewDate}};
        return this.trackEvent('SUPPORT_ARTICLE_VIEWED', payload);
    }

}

export default RateYourCustomer;
module.exports = RateYourCustomer;
