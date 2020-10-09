import { Injectable } from '@angular/core';
import { Product } from './home.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  productHaveStock = [];
  private product: Product[] = [
    {
      id: 'p1',
      produkType: 'CPU',
      imgUrl: ['https://thesystemone.com/image/cache/catalog/processor/amd/ryzen9-3950x-2-1000x1000.jpg'],
      nama: 'AMD',
      model: 'Ryzen 9 - 3950X',
      harga: 12110000,
      stok: 20,
      baseClock: 3.5,
      boostClock: 4.7,
      jumlahCore: 16,
      jumlahThread: 32,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
    {
      id: 'p2',
      produkType: 'GPU',
      imgUrl: ['https://www.geeks3d.com/public/jegx/2018q3/geforce-rtx-2080-ti-02.png'],
      nama: 'Nvidia',
      model: 'GeForce RTX 2080 Ti',
      harga: 22500000,
      stok: 35,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
    {
      id: 'p3',
      produkType: 'RAM',
      imgUrl: ['https://static.bmdstatic.com/pk/product/medium/CORSAIR-Memory-PC-1-x-8GB-DDR4-CMSO8GX4M1A2133C15--SKU00316113-201612010152.png'],
      nama: 'Corsair',
      model: 'CMSO8GX4M1A2133C15',
      harga: 850000,
      stok: 23,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: 2133,
      ukuran: 8,
      chipset: null,
      processor: null,
    },
    {
      id: 'p4',
      produkType: 'Motherboard',
      imgUrl: ['https://d2um6umu4gwssp.cloudfront.net/blog/wp-content/uploads/2019/07/new-macbook-pro-2019-fix-it-mission-impossible-board-400x240@2x.jpg'],
      nama: 'MSI',
      model: 'A320M-A Pro Max',
      harga: 18000000,
      stok: 10,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: 'AMD X370 Chipset',
      processor:'AMD Ryzen Gen 3',
    }
  ];


  constructor() { }

  getAllProduct(){
    this.productHaveStock = [];
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.product.length; i++){
      if (this.product[i].stok > 0){
        this.productHaveStock[j] = this.product[i];
        j++;
      }
    }
    return [...this.productHaveStock];
  }

  getProduct(productId: string) {
    return {...this.product.find(product => {
      return product.id === productId;
    })};

  }

  addProduct(data: FormGroup){
    let DATA = {
      id: 'p' + (parseInt(this.product[this.product.length-1].id.substring(1))+1).toString(),
      produkType : data.value.type,
      imgUrl:[data.value.foto1,data.value.foto2],
      nama: data.value.nama,
      model: data.value.model,
      harga: data.value.harga,
      stok: data.value.stok,
      baseClock: data.value.baseClock,
      boostClock: data.value.boostClock,
      jumlahCore: data.value.core,
      jumlahThread: data.value.thread,
      speed: data.value.speed,
      ukuran: data.value.ukuran,
      chipset: data.value.chipset,
      processor: data.value.processor,
    }
    this.product.push(DATA)
  }

  deleteProduk(produkId){
    this.product = this.product.filter(produk => {
      return produk.id !== produkId;
    });
  }

  editProduk(produkId, editedProduk){
    return {...this.product.find(product => {
        if (product.id === produkId){
          product.nama = editedProduk['editedNama'];
          product.imgUrl = [editedProduk['editedImg1'],editedProduk['editedImg2']];
          product.model = editedProduk['editedModel'];
          product.harga = editedProduk['editedHarga'];
          product.stok = editedProduk['editedStok'];
          product.baseClock = editedProduk['editedBaseClock'];
          product.boostClock = editedProduk['editedBoostClock'];
          product.jumlahCore = editedProduk['editedCore'];
          product.jumlahThread = editedProduk['editedThread'];
          product.speed = editedProduk['editedSpeed'];
          product.ukuran = editedProduk['editedUkuran'];
          product.chipset = editedProduk['editedChipset'];
          product.processor = editedProduk['editedProcessor'];
        }
    })};
  }
}
