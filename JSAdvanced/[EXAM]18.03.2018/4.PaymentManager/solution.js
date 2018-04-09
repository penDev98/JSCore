class PaymentManager {
    constructor(title) {
        this.title = title;
        this.body = this.createBody();
    }

    updateBody() {
       let table = ('table');
       let tfoot = table.find('tfoot');
       let tr3 = tfoot.find('tr');
       let name = tr3.find('input').val();

       let thead = table.find('thead');
       let tr = thead.find('tr');
        let tbody = $(`<tbody class="payments" <tr>${name}<td></td>
            <td>Payment's category</td>
            <td>Payment's price</td>
            <td><button>Delete</button></td>
        </tr>`);
        this.body.append(tbody);


    }

    createBody() {
        let table = $('<table>');
        let caption = $(`<caption>${this.title} Payment Manager</caption>>`);
        let thead = $('<thead>');
        let tr = $('<tr>');
        let nameTH = $(`<th class="name">Name</th>`);
        let categoryTH = $(`<th class="category">Category</th>`);
        let priceTH = $(`<th class="price">Price</th>`);
        let actionsTH = $(`<th>Actions</th>`);
        tr.append(nameTH);
        tr.append(categoryTH);
        tr.append(priceTH);
        tr.append(actionsTH);
        thead.append(tr);

        let tfoot = $('<tfoot class="input-data"></tfoot>');
        let tr3 = $('<tr>');
        let NameInput = $('<td><input name="name" type="text"></td>');
        let CategoryInput = $('<td><input name="category" type="text"></td>');
        let PriceInput = $('<td><input name="price" type="number"></td>');
        let buttonAdd = $('<td><button>Add</button></td>').click(() => this.updateBody());

        tr3.append(NameInput).append(CategoryInput).append(PriceInput).append(buttonAdd);
        tfoot.append(tr3);


        let tbody = $('<tbody class="payments"></tbody>');


        table.append(caption).append(thead);
        table.append(tbody);
        table.append(tr3);
        return table;
    }

    render(target) {
        $(`#${target}`).append(this.body)
    }
}