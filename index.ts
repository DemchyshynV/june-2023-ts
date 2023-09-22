const baseURL = 'http://owu.linkpc.net/carsAPI/v1'

const cars = `${baseURL}/cars`

const urls = {
    cars: {
        base: cars,
        byId: (id: number): string => `${cars}/${id}`
    }
}

interface ICar {
    id?: number;
    brand: string;
    price: number;
    year: number;
}

const carService = {
    getAll: (): Promise<ICar[]> => fetch(urls.cars.base).then(value => value.json()),
    create: (data: ICar): Promise<ICar> => fetch(urls.cars.base, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-type': 'application/json'}
    }).then(value => value.json()),
    deleteById: (id: number): Promise<Response> => fetch(urls.cars.byId(id), {method: 'DELETE'})
}


class CarHtmlRender {
    static async showAll(): Promise<void> {
        this.formAction()
        const cars = await carService.getAll();
        const carContainerDiv = document.querySelector<HTMLDivElement>('#carContainer');
        carContainerDiv.innerHTML = ''
        cars.forEach(car => {
            const itemDiv = document.createElement('div');
            itemDiv.innerText = `${car.id}) ${car.brand} ${car.price} ${car.year}`
            const button = document.createElement('button');
            button.innerText = 'delete'
            button.onclick = async () => {
                await carService.deleteById(car.id)
                await this.showAll()
            }
            itemDiv.appendChild(button)
            carContainerDiv.appendChild(itemDiv)
        })
    }

    private static formAction(): void {
        const form = document.forms.namedItem('carForm');
        form.onsubmit = async (e: SubmitEvent): Promise<void> => {
            e.preventDefault()
            const {brand, price, year} = form as any as Record<'brand' | 'price' | 'year', HTMLInputElement>;
            const car: ICar = {brand: brand.value, price: +price.value, year: +year.value}
            await carService.create(car)
            await this.showAll()
            form.reset()
        }
    }
}

// const carHtmlRender = new CarHtmlRender();

CarHtmlRender.showAll()