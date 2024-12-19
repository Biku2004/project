/**
 * @typedef {Object} Stock
 * @property {string} id
 * @property {string} symbol
 * @property {string} name
 * @property {number} quantity
 * @property {number} buyPrice
 * @property {number} currentPrice
 */

/**
 * @typedef {Object} PortfolioMetrics
 * @property {number} totalValue
 * @property {number} totalGainLoss
 * @property {Stock|null} topPerformer
 * @property {Stock|null} worstPerformer
 */