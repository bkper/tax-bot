
The Bkper Sales Tax Bot is triggered upon transaction posting and calculate **taxes** based on its amount, such as **VAT**, **GST** and the like, recording a new transaction with that information. 

<p align="center">
  <img src='https://bkper.com/images/bots/bkper-tax-bot/bkper-tax-bot.gif' alt='Bkper Sales Tax Bot in action'/>
</p>


### Tax on sale example
![Tax on sale example](https://docs.google.com/drawings/d/19EgK9s011d4qf2h1ka_cGK3OYX1PhQLpHgeTvxrtqgg/edit?usp=sharing)


### Tax on purchase example
![Tax on sale example](https://bkper.com/images/bots/bkper-tax-bot/bkper-tax-bot-purchase-example.png)
    

The examples use simplified cash basis for easy understanding. You can also set more complex tax flows involving accounts [payable](https://help.bkper.com/en/articles/2569171-accounts-payable) and [receivable](https://help.bkper.com/en/articles/2569170-accounts-receivable) instead of the direct Bank Account.


Learn more about sales taxes and bots on Bkper:

[Sales taxes on Bkper](https://help.bkper.com/en/articles/2569187-sales-taxes-vat)    

[Bkper Bots Installation](https://help.bkper.com/en/articles/3873607-bkper-bots-installation)    


## Configuration

### Account properties

- ```tax_rate```: The tax rate to apply to the new transaction
- ```tax_description```: The description of the generated transaction

Example:
```yaml
tax_rate: 12.85
tax_description: #vatin
```

#### Expressions

Expressions allow to dynamically insert values from the current **account** and the **transaction** being posted.

The following expressions can be used in the **tax_description**:

- ```${account.name}```
- ```${transaction.description}```

Example:
``` yaml
tax_description: ${account.name} Input Tax #vatin ${transaction.description}
```

### Book properties

In some cases, you need to avoid calculating taxes from transactions generated by other bots, to avoid infine loop. 

To do so, you should set a property in the book, specifying the id of the bots you want to skip.

- ```tax_skip```: The ids of bots you should skip calculating taxes.

Example:
```yaml
tax_skip: exchange-bot ofx-importer
```
