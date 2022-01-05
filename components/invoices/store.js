const InvoiceModel = require("./model");

class InvoicesDB {
    constructor() {}

    async getInvoices() {
        const Invoices = await InvoiceModel.find().populate('products');
        return Invoices;
    }

    async getInvoice(invoiceId) {
        const invoice = await InvoiceModel.findById(invoiceId).populate('products');
        return invoice;
    }

    addInvoice(invoice) {
        const newInvoice = new InvoiceModel(invoice);
        newInvoice.save();
    }

    async updateInvoice(invoiceId, invoiceParams) {
        const invoice = await InvoiceModel.findByIdAndUpdate(invoiceId, {
            ...invoiceParams
        })
        return invoice;
    }

    async updateInvoiceByParams(invoiceId, invoiceParams) {
        const invoice = await InvoiceModel.findByIdAndUpdate(invoiceId, {
            ...invoiceParams
        });
        return invoice;
    }
    async deleteInvoice(invoiceId) {
        const invoice = await InvoiceModel.findByIdAndDelete(invoiceId);
        return invoice;
    }
}

module.exports = InvoicesDB;
