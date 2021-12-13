/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BondDepository",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BondDepository__factory>;
    getContractFactory(
      name: "IBondCalculator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBondCalculator__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IPolicy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPolicy__factory>;
    getContractFactory(
      name: "IStaking",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStaking__factory>;
    getContractFactory(
      name: "IStakingHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStakingHelper__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "Policy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Policy__factory>;
    getContractFactory(
      name: "Distributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Distributor__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IPolicy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPolicy__factory>;
    getContractFactory(
      name: "ITreasury",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITreasury__factory>;
    getContractFactory(
      name: "Policy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Policy__factory>;
    getContractFactory(
      name: "StakingDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StakingDistributor__factory>;

    getContractAt(
      name: "BondDepository",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BondDepository>;
    getContractAt(
      name: "IBondCalculator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBondCalculator>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IPolicy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPolicy>;
    getContractAt(
      name: "IStaking",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStaking>;
    getContractAt(
      name: "IStakingHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStakingHelper>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "Policy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Policy>;
    getContractAt(
      name: "Distributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Distributor>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IPolicy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPolicy>;
    getContractAt(
      name: "ITreasury",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITreasury>;
    getContractAt(
      name: "Policy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Policy>;
    getContractAt(
      name: "StakingDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StakingDistributor>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
