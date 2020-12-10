abstract class EventHandler {

  protected abstract processTransaction(book: Bkper.Book, transaction: bkper.Transaction): string[] | string | boolean;

  handleEvent(event: bkper.Event): string[] | string | boolean {
    let bookId = event.bookId;
    let operation = event.data.object as bkper.TransactionOperation;
    let transaction = operation.transaction;
    var book = BkperApp.getBook(bookId);

    if (!transaction.posted) {
      return false;
    }

    return this.processTransaction(book, transaction);
  }

  protected getId(transaction: bkper.Transaction, accountOrGroup: Bkper.Account | Bkper.Group) {
    return `tax_${transaction.id}_${accountOrGroup.getId()}`;
  }

}