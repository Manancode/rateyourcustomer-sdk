import axios from 'axios';

class RateYourCustomer {
    constructor(apiKey, baseUrl = 'https://rateyourcustomer.vercel.app/api') {
      this.apiKey = apiKey;
      this.baseUrl = baseUrl;
    }
  
    async trackEvent(eventType, payload) {
      try {
        const response = await axios.post(
          `${this.baseUrl}/webhook-event`, 
          { eventType, ...payload },
          { headers: { 'x-api-key': this.apiKey } }
        );
        console.log(`Event ${eventType} sent successfully`);
        return response.data;
      } catch (error) {
        console.error(`Error sending event ${eventType}:`, error.response?.data || error.message);
        throw error;
      }
    }

  // Helper methods for specific events
  async trackPaymentReceived(customerId, userId, amount, currency, paymentDate) {
    const payload = { customerId, userId, amount, currency, paymentDate };
    return this.trackEvent('PAYMENT_RECEIVED', payload);
  }

  async trackPaymentMissed(customerId, userId, amount, currency, dueDate) {
    const payload = { customerId, userId, amount, currency, dueDate };
    return this.trackEvent('PAYMENT_MISSED', payload);
  }

  async trackPaymentTermsChanged(customerId, userId, oldTerms, newTerms, changeDate) {
    const payload = { customerId, userId, oldTerms, newTerms, changeDate };
    return this.trackEvent('PAYMENT_TERMS_CHANGED', payload);
  }

  async trackOrderPlaced(customerId, userId, orderId, total, items) {
    const payload = { customerId, userId, orderId, total, items };
    return this.trackEvent('ORDER_PLACED', payload);
  }

  async trackOrderUpdated(customerId, userId, orderId, changes) {
    const payload = { customerId, userId, orderId, changes };
    return this.trackEvent('ORDER_UPDATED', payload);
  }

  async trackOrderCancelled(customerId, userId, orderId, reason) {
    const payload = { customerId, userId, orderId, reason };
    return this.trackEvent('ORDER_CANCELLED', payload);
  }

  async trackLifetimeValueUpdated(customerId, userId, oldValue, newValue) {
    const payload = { customerId, userId, oldValue, newValue };
    return this.trackEvent('LIFETIME_VALUE_UPDATED', payload);
  }

  async trackLifetimeValueCalculated(customerId, userId, value, calculationDate) {
    const payload = { customerId, userId, value, calculationDate };
    return this.trackEvent('LIFETIME_VALUE_CALCULATED', payload);
  }

  async trackProductUsageUpdated(customerId, userId, productId, usageMetrics) {
    const payload = { customerId, userId, productId, usageMetrics };
    return this.trackEvent('PRODUCT_USAGE_UPDATED', payload);
  }

  async trackFeatureUsageDeclined(customerId, userId, featureId, declinePercentage) {
    const payload = { customerId, userId, featureId, declinePercentage };
    return this.trackEvent('FEATURE_USAGE_DECLINED', payload);
  }

  async trackPurchaseFrequencyChanged(customerId, userId, oldFrequency, newFrequency) {
    const payload = { customerId, userId, oldFrequency, newFrequency };
    return this.trackEvent('PURCHASE_FREQUENCY_CHANGED', payload);
  }

  async trackRenewalRateUpdated(customerId, userId, oldRate, newRate) {
    const payload = { customerId, userId, oldRate, newRate };
    return this.trackEvent('RENEWAL_RATE_UPDATED', payload);
  }

  async trackRenewalRiskIdentified(customerId, userId, riskLevel, riskFactors) {
    const payload = { customerId, userId, riskLevel, riskFactors };
    return this.trackEvent('RENEWAL_RISK_IDENTIFIED', payload);
  }

  async trackReturnRateUpdated(customerId, userId, oldRate, newRate) {
    const payload = { customerId, userId, oldRate, newRate };
    return this.trackEvent('RETURN_RATE_UPDATED', payload);
  }

  async trackSupportTicketCreated(customerId, userId, ticketId, subject) {
    const payload = { customerId, userId, ticketId, subject };
    return this.trackEvent('SUPPORT_TICKET_CREATED', payload);
  }

  async trackSupportTicketResolved(customerId, userId, ticketId, resolution) {
    const payload = { customerId, userId, ticketId, resolution };
    return this.trackEvent('SUPPORT_TICKET_RESOLVED', payload);
  }

  async trackUpsellOpportunityCreated(customerId, userId, opportunityId, product) {
    const payload = { customerId, userId, opportunityId, product };
    return this.trackEvent('UPSELL_OPPORTUNITY_CREATED', payload);
  }

  async trackUpsellOpportunityLost(customerId, userId, opportunityId, reason) {
    const payload = { customerId, userId, opportunityId, reason };
    return this.trackEvent('UPSELL_OPPORTUNITY_LOST', payload);
  }

  async trackCustomerEngagementUpdated(customerId, userId, engagementMetrics) {
    const payload = { customerId, userId, engagementMetrics };
    return this.trackEvent('CUSTOMER_ENGAGEMENT_UPDATED', payload);
  }

  async trackCustomerSuccessUpdated(customerId, userId, successMetrics) {
    const payload = { customerId, userId, successMetrics };
    return this.trackEvent('CUSTOMER_SUCCESS_UPDATED', payload);
  }

  async trackSuccessMilestoneAchieved(customerId, userId, milestone) {
    const payload = { customerId, userId, milestone };
    return this.trackEvent('SUCCESS_MILESTONE_ACHIEVED', payload);
  }

  async trackFeedbackScoreUpdated(customerId, userId, oldScore, newScore) {
    const payload = { customerId, userId, oldScore, newScore };
    return this.trackEvent('FEEDBACK_SCORE_UPDATED', payload);
  }

  async trackDataSyncCompleted(customerId, userId, syncDetails) {
    const payload = { customerId, userId, syncDetails };
    return this.trackEvent('DATA_SYNC_COMPLETED', payload);
  }

  async trackContractCreated(customerId, userId, contractId, terms) {
    const payload = { customerId, userId, contractId, terms };
    return this.trackEvent('CONTRACT_CREATED', payload);
  }

  async trackContractUpdated(customerId, userId, contractId, changes) {
    const payload = { customerId, userId, contractId, changes };
    return this.trackEvent('CONTRACT_UPDATED', payload);
  }

  async trackContractTerminated(customerId, userId, contractId, reason) {
    const payload = { customerId, userId, contractId, reason };
    return this.trackEvent('CONTRACT_TERMINATED', payload);
  }

  async trackAccountHealthUpdated(customerId, userId, oldHealth, newHealth) {
    const payload = { customerId, userId, oldHealth, newHealth };
    return this.trackEvent('ACCOUNT_HEALTH_UPDATED', payload);
  }

  async trackAccountAtRisk(customerId, userId, riskFactors) {
    const payload = { customerId, userId, riskFactors };
    return this.trackEvent('ACCOUNT_AT_RISK', payload);
  }

  async trackResourceDownloaded(customerId, userId, resourceId, resourceType) {
    const payload = { customerId, userId, resourceId, resourceType };
    return this.trackEvent('RESOURCE_DOWNLOADED', payload);
  }

  async trackSupportArticleViewed(customerId, userId, articleId, articleTitle) {
    const payload = { customerId, userId, articleId, articleTitle };
    return this.trackEvent('SUPPORT_ARTICLE_VIEWED', payload);
  }

  async trackAverageOrderValueUpdated(customerId, userId, oldValue, newValue) {
    const payload = { customerId, userId, oldValue, newValue };
    return this.trackEvent('AVERAGE_ORDER_VALUE_UPDATED', payload);
  }

  async trackCustomerRatingUpdated(customerId, userId, oldRating, newRating) {
    const payload = { customerId, userId, oldRating, newRating };
    return this.trackEvent('CUSTOMER_RATING_UPDATED', payload);
  }
}

export default RateYourCustomer;
