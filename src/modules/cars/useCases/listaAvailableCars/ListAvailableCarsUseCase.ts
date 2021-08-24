import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}
@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}
  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findByAvailable(
      name,
      brand,
      category_id
    );

    return cars;
  }
}

export { ListAvailableCarsUseCase };
