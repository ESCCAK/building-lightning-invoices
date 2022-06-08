import { Invoice } from "./Invoice";

export class Leader {
    public invoice: Invoice;

    constructor(public identifier: string, public localSignature: string, public minSats: number) {}

    public get isSettled(): boolean {
        return this.invoice !== undefined;
    }

    public get nodeId(): string {
        return this.invoice?.forNodeId;
    }

    public get next(): string {
        return this.invoice?.preimage;
    }

    public settle(invoice: Invoice) {
        this.invoice = invoice;
    }

    public toJSON() {
        if (this.isSettled) {
            return {
                identifier: this.identifier,
                isSettled: this.isSettled,
                minSats: this.minSats,
                localSignature: this.localSignature,
                invoice: this.invoice,
                nodeId: this.nodeId,
                next: this.next,
            };
        } else {
            return {
                identifier: this.identifier,
                isSettled: this.isSettled,
                minSats: this.minSats,
            };
        }
    }
}
