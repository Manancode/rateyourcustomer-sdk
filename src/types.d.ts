type EventPayload =
  | {
      eventType: "PAYMENT_RECEIVED";
      customerId: string;
      amount: number;
      paymentDate: string;
    }
  | {
      eventType: "PAYMENT_MISSED";
      customerId: string;
      missedDate: string;
    }
  | {
      eventType: "PAYMENT_TERMS_CHANGED";
      customerId: string;
      newTerms: string;
      updatedDate: string;
    }
  | {
      eventType: "ACCOUNT_HEALTH_UPDATED";
      customerId: string;
      healthScore: number;
      status: string;
      details: {
        lastCheck: string;
        notes: string;
      };
      updateDate: string;
    }
  | {
      eventType: "CONTRACT_CREATED";
      customerId: string;
      contractLength: number;
      startDate: string;
      endDate: string;
    }
  | {
      eventType: "CONTRACT_UPDATED";
      customerId: string;
      contractLength: number;
      startDate: string;
      endDate: string;
      renewalDate?: string;
      updateDate: string;
    }
  | {
      eventType: "CONTRACT_TERMINATED";
      customerId: string;
      terminationDetails: string;
      terminationDate: string;
    }
  | {
      eventType: "CUSTOMER_ENGAGEMENT_UPDATED";
      customerId: string;
      engagementScore: number;
      lastEngaged: string;
      details: {
        channels: string[];
        notes: string;
      };
    }
  | {
      eventType: "SUCCESS_MILESTONE_ACHIEVED";
      customerId: string;
      milestone: string;
      achievedAt: string;
      details: {
        description: string;
        notes: string;
      };
    }
  | {
      eventType: "CUSTOMER_SUCCESS_UPDATED";
      customerId: string;
      successScore: number;
      milestone: string;
      achievedAt: string;
      details: {
        description: string;
        notes: string;
      };
    }
  | {
      eventType: "FEEDBACK_SCORE_UPDATED";
      customerId: string;
      feedbackScore: number;
      feedbackDate: string;
      feedbackType: string;
      details: {
        description: string;
        notes: string;
      };
    }
  | {
      eventType: "LIFETIME_VALUE_CALCULATED";
      customerId: string;
      totalRevenue: number;
      startDate: string;
      endDate: string;
      details: {
        description: string;
        notes: string;
      };
    }
  | {
      eventType: "LIFETIME_VALUE_UPDATED";
      customerId: string;
      totalRevenue: number;
      startDate: string;
      endDate: string;
      details: {
        description: string;
        notes: string;
      };
    }
  | {
      eventType: "ORDER_PLACED";
      customerId: string;
      orderValue: number;
      orderDate: string;
      status: string;
    }
  | {
      eventType: "ORDER_UPDATED";
      customerId: string;
      orderId: string;
      updatedFields: {
        orderValue?: number;
        status?: string;
      };
    }
  | {
      eventType: "ORDER_CANCELLED";
      customerId: string;
      orderId: string;
      cancelDate: string;
    }
  | {
      eventType: "PRODUCT_USAGE_UPDATED";
      customerId: string;
      featureUsed: string;
      usageDuration: number;
      usageDate: string;
    }
  | {
      eventType: "PURCHASE_FREQUENCY_CHANGED";
      customerId: string;
      numberOfPurchases: number;
      purchaseDates: string[];
      frequency: string;
    }
  | {
      eventType: "RENEWAL_RISK_IDENTIFIED";
      customerId: string;
      riskDetails: string;
      identifiedDate: string;
    }
  | {
      eventType: "FEATURE_USAGE_DECLINED";
      customerId: string;
      featureUsed: string;
      declineReason: string;
      declineDate: string;
    }
  | {
      eventType: "RENEWAL_RATE_UPDATED";
      customerId: string;
      renewalRate: number;
      lastRenewalUpdate: string;
    }
  | {
      eventType: "RESOURCE_DOWNLOADED";
      customerId: string;
      resourceId: string;
      downloadDate: string;
    }
  | {
      eventType: "SUPPORT_ARTICLE_VIEWED";
      customerId: string;
      articleId: string;
      viewDate: string;
    }
  | {
      eventType: "RETURN_RATE_UPDATED";
      customerId: string;
      numberOfReturns: number;
      totalOrders: number;
      returnDates: string[];
      returnDetails: {
        reason: string;
        comments: string;
      };
    }
  | {
      eventType: "SUPPORT_TICKET_CREATED";
      customerId: string;
      ticketId: string;
      createdAt: string;
    }
  | {
      eventType: "SUPPORT_TICKET_RESOLVED";
      ticketId: string;
      resolvedAt: string;
      satisfactionScore: number;
      customerId: string;
    }
  | {
      eventType: "UPSELL_OPPORTUNITY_CREATED";
      customerId: string;
      description: string;
      value: number;
      status: string;
    }
  | {
      eventType: "UPSELL_OPPORTUNITY_LOST";
      customerId: string;
      lossReason: string;
      lossDate: string;
    }
  | {
      eventType: "DATA_SYNC_COMPLETED";
      customerId: string;
      syncDate: string;
      details: {
        description: string;
      };
      syncType?: string;
      status: string;
    };
