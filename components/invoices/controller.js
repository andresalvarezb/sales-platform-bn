const InvoicesDB = require("./store");
const store = new InvoicesDB();
class InvoicesController {
    constructor() {}


    addInvoice(invoice) {
        return new Promise((resolve, reject) => {
            if (!invoice) reject('Invalid Invoice');
            resolve(invoice);
            store.addInvoice(invoice);
        })
    }

    getInvoices() {
        return new Promise((resolve, reject) => {
            const invoices = store.getInvoices()
            invoices ? resolve(invoices) : reject('There are no invoices');
        })
    }

    getInvoice(invoiceId) {
        return new Promise((resolve, reject) => {
            const invoice = store.getInvoice(invoiceId)
            invoice ? resolve(invoice) : reject('There is no invoice');
        })
    }

    updateInvoice(id, invoiceParams) {
        return new Promise((resolve, reject) => {
            if (!id || !invoiceParams) reject('Invalid data');
            const invoice = store.updateInvoice(id, invoiceParams);
            if (!invoice) reject('Don\'t exist this invoice');
            resolve(invoice);
        })
    }

    deleteInvoice(id) {
        return new Promise((resolve, reject) => {
            if (!id) reject('Invalid ID');
            const invoice = store.deleteInvoice(id);
            if (!invoice) reject('Don\'t exist this invoice');
            resolve(invoice);
        })
    }
}

module.exports = InvoicesController;
