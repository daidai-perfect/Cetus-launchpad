"use strict";(self.webpackChunkbrige_typescript=self.webpackChunkbrige_typescript||[]).push([[732],{7732:(e,n,a)=>{a.r(n),a.d(n,{SolanaCircleBridge:()=>S,idl:()=>k});var t=a(7718),i=Object.defineProperty,s=(e,n,a)=>((e,n,a)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a)(e,"symbol"!=typeof n?n+"":n,a);const r=new t.aY("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");new t.aY("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");const m=new t.aY("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");new t.aY("So11111111111111111111111111111111111111112"),new t.aY("9pan9bMn5HatX4EJdBwg9VgCa7Uz5HL8N1m5D3NdXejP");class o extends Error{constructor(e){super(e)}}class u extends o{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}function d(e,n,a,i){let s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:r,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:m;return function(e,n,a,i,s){let o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:r,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:m;const d=[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:t.co.programId,isSigner:!1,isWritable:!1},{pubkey:o,isSigner:!1,isWritable:!1}];return new t.cg({keys:d,programId:u,data:s})}(e,n,a,i,t.Z.Buffer.alloc(0),s,o)}function g(e,n){return new t.ct(k.TokenMessengerIdl,new t.aY(e),void 0===n?{connection:null}:n)}function c(e,n){return new t.ct(k.MessageTransmitterIdl,new t.aY(e),void 0===n?{connection:null}:n)}(0,t.bx)([(0,t.by)("mintAuthorityOption"),(0,t.bz)("mintAuthority"),(0,t.bA)("supply"),(0,t.bB)("decimals"),(0,t.bC)("isInitialized"),(0,t.by)("freezeAuthorityOption"),(0,t.bz)("freezeAuthority")]).span;const p=(e,n,a)=>{const i=[t.Z.Buffer.from(t.cL.bytes.utf8.encode(e))];if(a)for(const r of a)"string"==typeof r?i.push(t.Z.Buffer.from(t.cL.bytes.utf8.encode(r))):Array.isArray(r)?i.push(t.Z.Buffer.from(r)):t.Z.Buffer.isBuffer(r)?i.push(r):i.push(r.toBuffer());const s=t.aY.findProgramAddressSync(i,n);return{publicKey:s[0],bump:s[1]}};const y=6400n;function l(e){return(e-BigInt(1))/y*y+BigInt(1)}function M(e,n,a){const t=n.toString();return p("used_nonces",a,[t,l(e).toString()]).publicKey}class S{constructor(e,n,a,i){var r,m;if(s(this,"network"),s(this,"chain"),s(this,"connection"),s(this,"contracts"),s(this,"tokenMessenger"),s(this,"messageTransmitter"),this.network=e,this.chain=n,this.connection=a,this.contracts=i,"Devnet"===e)throw new Error("CircleBridge not supported on Devnet");const o=null==(r=i.cctp)?void 0:r.messageTransmitter;if(!o)throw new Error(`Circle Messenge Transmitter contract for domain ${n} not found`);this.messageTransmitter=function(e,n){return c(e,(0,t.cu)(n))}(new t.aY(o),this.connection);const u=null==(m=i.cctp)?void 0:m.tokenMessenger;if(!u)throw new Error(`Circle Token Messenger contract for domain ${n} not found`);this.tokenMessenger=function(e,n){return g(e,(0,t.cu)(n))}(new t.aY(u),this.connection)}static async fromRpc(e,n){const[a,i]=await t.e.chainFromRpc(e),s=n[i];if(s.network!==a)throw new Error(`Network mismatch: ${s.network} != ${a}`);return new S(a,i,e,s.contracts)}async*redeem(e,n,a){const i=new t.aY(t.c3.get(this.network,this.chain)),s=new t.S(e).unwrap(),m=new t.S(n.payload.mintRecipient).unwrap();if(!await this.connection.getAccountInfo(m)){const e=(new t.b0).add(d(s,m,s,i));e.feePayer=s,yield this.createUnsignedTx({transaction:e},"CircleBridge.CreateATA")}const o=await async function(e,n,a,i,s,m){const o=t.Z.Buffer.from(t.c2.serialize(i)),u=t.Z.Buffer.from(t.u.decode(s)),d=new t.aY(a),g=new t.aY(i.payload.burnToken.toUint8Array()),y=new t.S(i.payload.mintRecipient).unwrap(),l=m?new t.aY(m):y,S=i.sourceDomain.toString(),k=p("message_transmitter",e),h=p("token_messenger",n),f=p("token_minter",n),b=p("local_token",n,[d]),v=p("remote_token_messenger",n,[S]),P=p("token_pair",n,[S,g]),T=p("custody",n,[d]),w=p("message_transmitter_authority",e,[n]).publicKey,A=M(i.nonce,i.sourceDomain,e),I=p("__event_authority",e),K=p("__event_authority",n),x=[];x.push({isSigner:!1,isWritable:!1,pubkey:h.publicKey}),x.push({isSigner:!1,isWritable:!1,pubkey:v.publicKey}),x.push({isSigner:!1,isWritable:!0,pubkey:f.publicKey}),x.push({isSigner:!1,isWritable:!0,pubkey:b.publicKey}),x.push({isSigner:!1,isWritable:!1,pubkey:P.publicKey}),x.push({isSigner:!1,isWritable:!0,pubkey:y}),x.push({isSigner:!1,isWritable:!0,pubkey:T.publicKey}),x.push({isSigner:!1,isWritable:!1,pubkey:r}),x.push({isSigner:!1,isWritable:!1,pubkey:K.publicKey}),x.push({isSigner:!1,isWritable:!1,pubkey:n});const B=c(e);return B.methods.receiveMessage({message:o,attestation:u}).accounts({payer:l,caller:l,authorityPda:w,messageTransmitter:k.publicKey,usedNonces:A,receiver:n,systemProgram:t.co.programId,eventAuthority:I.publicKey,program:B.programId}).remainingAccounts(x).transaction()}(this.messageTransmitter.programId,this.tokenMessenger.programId,i,n,a,s),u=new t.b0;u.feePayer=s,u.add(o),yield this.createUnsignedTx({transaction:u},"CircleBridge.Redeem")}async*transfer(e,n,a){const i=new t.aY(t.c3.get(this.network,this.chain)),s=new t.S(e).unwrap(),o=function(e,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:m;if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!t.aY.isOnCurve(n.toBuffer()))throw new u;const[s]=t.aY.findProgramAddressSync([n.toBuffer(),a.toBuffer(),e.toBuffer()],i);return s}(i,s),d=t.c1.get(this.network,n.chain),c=n.address.toUniversalAddress(),y=t.b7.generate(),l=await function(e,n,a,i,s,m,o,u,d){const c=p("message_transmitter",e),y=p("token_messenger",n),l=p("token_minter",n),M=p("local_token",n,[a]),S=p("remote_token_messenger",n,[i.toString()]),k=p("sender_authority",n),h=g(n),f=p("__event_authority",n);return h.methods.depositForBurn({amount:new t.cG(u.toString()),destinationDomain:i,mintRecipient:new t.aY(o.toUint8Array())}).accounts({owner:s,senderAuthorityPda:k.publicKey,burnTokenAccount:m,messageTransmitter:c.publicKey,tokenMessenger:y.publicKey,remoteTokenMessenger:S.publicKey,tokenMinter:l.publicKey,localToken:M.publicKey,burnTokenMint:a,messageTransmitterProgram:e,tokenMessengerMinterProgram:n,tokenProgram:r,eventAuthority:f.publicKey,eventRentPayer:s,messageSentEventData:d}).instruction()}(this.messageTransmitter.programId,this.tokenMessenger.programId,i,d,s,o,c,a,y.publicKey),M=new t.b0;M.feePayer=s,M.add(l),yield this.createUnsignedTx({transaction:M,signers:[y]},"CircleBridge.Transfer")}async isTransferCompleted(e){const n=M(e.nonce,e.sourceDomain,this.messageTransmitter.programId),a=l(e.nonce),{usedNonces:i}=await this.messageTransmitter.account.usedNonces.fetch(n),s=Number(e.nonce-a),r=i[Math.floor(s/64)];if(!r)throw new Error("Invalid nonce byte index");const m=s%64,o=new t.cG((BigInt(1)<<BigInt(m)).toString());return!r.and(o).isZero()}async parseTransactionDetails(e){const n=await this.connection.getTransaction(e);if(!n||!n.meta)throw new Error("Transaction not found");const a=n.transaction.message.getAccountKeys();if(a.length<2)throw new Error("No message account found");const i=a.get(1),s=await this.connection.getAccountInfo(i);if(!s)throw new Error("No account data found");const r=new Uint8Array(s.data).slice(44),[m,o]=t.c2.deserialize(r),{payload:u}=m,d=u.messageSender,g=u.mintRecipient,c=(0,t.c5)(this.network,m.sourceDomain);return{from:{chain:c,address:d},to:{chain:(0,t.c5)(this.network,m.destinationDomain),address:g},token:{chain:c,address:u.burnToken},amount:u.amount,message:m,id:{hash:o}}}createUnsignedTx(e,n){let a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return new t.cK(e,this.network,this.chain,n,a)}}(0,t.bS)(t.g,"CircleBridge",S);const k={TokenMessengerIdl:{version:"0.1.0",name:"token_messenger_minter",instructions:[{name:"initialize",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"upgradeAuthority",isMut:!1,isSigner:!0},{name:"authorityPda",isMut:!1,isSigner:!1},{name:"tokenMessenger",isMut:!0,isSigner:!1},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"tokenMessengerMinterProgramData",isMut:!1,isSigner:!1},{name:"tokenMessengerMinterProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"InitializeParams"}}]},{name:"transferOwnership",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"TransferOwnershipParams"}}]},{name:"acceptOwnership",accounts:[{name:"pendingOwner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"AcceptOwnershipParams"}}]},{name:"addRemoteTokenMessenger",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"AddRemoteTokenMessengerParams"}}]},{name:"removeRemoteTokenMessenger",accounts:[{name:"payee",isMut:!0,isSigner:!0},{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"RemoveRemoteTokenMessengerParams"}}]},{name:"depositForBurn",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!1},{name:"burnTokenAccount",isMut:!0,isSigner:!1},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"burnTokenMint",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"messageTransmitterProgram",isMut:!1,isSigner:!1},{name:"tokenMessengerMinterProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"DepositForBurnParams"}}],returns:"u64"},{name:"depositForBurnWithCaller",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!1},{name:"burnTokenAccount",isMut:!0,isSigner:!1},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"burnTokenMint",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"messageTransmitterProgram",isMut:!1,isSigner:!1},{name:"tokenMessengerMinterProgram",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"DepositForBurnWithCallerParams"}}],returns:"u64"},{name:"replaceDepositForBurn",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!1},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"messageTransmitterProgram",isMut:!1,isSigner:!1},{name:"tokenMessengerMinterProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"ReplaceDepositForBurnParams"}}],returns:"u64"},{name:"handleReceiveMessage",accounts:[{name:"authorityPda",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"remoteTokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"tokenPair",isMut:!1,isSigner:!1},{name:"recipientTokenAccount",isMut:!0,isSigner:!1},{name:"custodyTokenAccount",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"HandleReceiveMessageParams"}}]},{name:"setTokenController",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SetTokenControllerParams"}}]},{name:"pause",accounts:[{name:"pauser",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"PauseParams"}}]},{name:"unpause",accounts:[{name:"pauser",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UnpauseParams"}}]},{name:"updatePauser",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"tokenMessenger",isMut:!1,isSigner:!1},{name:"tokenMinter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UpdatePauserParams"}}]},{name:"setMaxBurnAmountPerMessage",accounts:[{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SetMaxBurnAmountPerMessageParams"}}]},{name:"addLocalToken",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"custodyTokenAccount",isMut:!0,isSigner:!1},{name:"localTokenMint",isMut:!1,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"AddLocalTokenParams"}}]},{name:"removeLocalToken",accounts:[{name:"payee",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!0,isSigner:!1},{name:"custodyTokenAccount",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"RemoveLocalTokenParams"}}]},{name:"linkTokenPair",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"tokenPair",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"LinkTokenPairParams"}}]},{name:"unlinkTokenPair",accounts:[{name:"payee",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"tokenPair",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UninkTokenPairParams"}}]},{name:"burnTokenCustody",accounts:[{name:"payee",isMut:!0,isSigner:!0},{name:"tokenController",isMut:!1,isSigner:!0},{name:"tokenMinter",isMut:!1,isSigner:!1},{name:"localToken",isMut:!1,isSigner:!1},{name:"custodyTokenAccount",isMut:!0,isSigner:!1},{name:"custodyTokenMint",isMut:!0,isSigner:!1},{name:"tokenProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"BurnTokenCustodyParams"}}]}],accounts:[{name:"tokenMessenger",type:{kind:"struct",fields:[{name:"owner",type:"publicKey"},{name:"pendingOwner",type:"publicKey"},{name:"localMessageTransmitter",type:"publicKey"},{name:"messageBodyVersion",type:"u32"},{name:"authorityBump",type:"u8"}]}},{name:"remoteTokenMessenger",type:{kind:"struct",fields:[{name:"domain",type:"u32"},{name:"tokenMessenger",type:"publicKey"}]}},{name:"tokenMinter",type:{kind:"struct",fields:[{name:"tokenController",type:"publicKey"},{name:"pauser",type:"publicKey"},{name:"paused",type:"bool"},{name:"bump",type:"u8"}]}},{name:"tokenPair",type:{kind:"struct",fields:[{name:"remoteDomain",type:"u32"},{name:"remoteToken",type:"publicKey"},{name:"localToken",type:"publicKey"},{name:"bump",type:"u8"}]}},{name:"localToken",type:{kind:"struct",fields:[{name:"custody",type:"publicKey"},{name:"mint",type:"publicKey"},{name:"burnLimitPerMessage",type:"u64"},{name:"messagesSent",type:"u64"},{name:"messagesReceived",type:"u64"},{name:"amountSent",type:"u128"},{name:"amountReceived",type:"u128"},{name:"bump",type:"u8"},{name:"custodyBump",type:"u8"}]}}],types:[{name:"AcceptOwnershipParams",type:{kind:"struct",fields:[]}},{name:"AddRemoteTokenMessengerParams",type:{kind:"struct",fields:[{name:"domain",type:"u32"},{name:"tokenMessenger",type:"publicKey"}]}},{name:"DepositForBurnWithCallerParams",type:{kind:"struct",fields:[{name:"amount",type:"u64"},{name:"destinationDomain",type:"u32"},{name:"mintRecipient",type:"publicKey"},{name:"destinationCaller",type:"publicKey"}]}},{name:"DepositForBurnParams",type:{kind:"struct",fields:[{name:"amount",type:"u64"},{name:"destinationDomain",type:"u32"},{name:"mintRecipient",type:"publicKey"}]}},{name:"HandleReceiveMessageParams",type:{kind:"struct",fields:[{name:"remoteDomain",type:"u32"},{name:"sender",type:"publicKey"},{name:"messageBody",type:"bytes"},{name:"authorityBump",type:"u8"}]}},{name:"InitializeParams",type:{kind:"struct",fields:[{name:"tokenController",type:"publicKey"},{name:"localMessageTransmitter",type:"publicKey"},{name:"messageBodyVersion",type:"u32"}]}},{name:"RemoveRemoteTokenMessengerParams",type:{kind:"struct",fields:[]}},{name:"ReplaceDepositForBurnParams",type:{kind:"struct",fields:[{name:"originalMessage",type:"bytes"},{name:"originalAttestation",type:"bytes"},{name:"newDestinationCaller",type:"publicKey"},{name:"newMintRecipient",type:"publicKey"}]}},{name:"TransferOwnershipParams",type:{kind:"struct",fields:[{name:"newOwner",type:"publicKey"}]}},{name:"AddLocalTokenParams",type:{kind:"struct",fields:[]}},{name:"BurnTokenCustodyParams",type:{kind:"struct",fields:[{name:"amount",type:"u64"}]}},{name:"LinkTokenPairParams",type:{kind:"struct",fields:[{name:"localToken",type:"publicKey"},{name:"remoteDomain",type:"u32"},{name:"remoteToken",type:"publicKey"}]}},{name:"PauseParams",type:{kind:"struct",fields:[]}},{name:"RemoveLocalTokenParams",type:{kind:"struct",fields:[]}},{name:"SetMaxBurnAmountPerMessageParams",type:{kind:"struct",fields:[{name:"burnLimitPerMessage",type:"u64"}]}},{name:"SetTokenControllerParams",type:{kind:"struct",fields:[{name:"tokenController",type:"publicKey"}]}},{name:"UninkTokenPairParams",type:{kind:"struct",fields:[]}},{name:"UnpauseParams",type:{kind:"struct",fields:[]}},{name:"UpdatePauserParams",type:{kind:"struct",fields:[{name:"newPauser",type:"publicKey"}]}},{name:"TokenMinterError",type:{kind:"enum",variants:[{name:"InvalidAuthority"},{name:"InvalidTokenMinterState"},{name:"ProgramPaused"},{name:"InvalidTokenPairState"},{name:"InvalidLocalTokenState"},{name:"InvalidPauser"},{name:"InvalidTokenController"},{name:"BurnAmountExceeded"},{name:"InvalidAmount"}]}}],events:[{name:"OwnershipTransferStarted",fields:[{name:"previousOwner",type:"publicKey",index:!1},{name:"newOwner",type:"publicKey",index:!1}]},{name:"OwnershipTransferred",fields:[{name:"previousOwner",type:"publicKey",index:!1},{name:"newOwner",type:"publicKey",index:!1}]},{name:"DepositForBurn",fields:[{name:"nonce",type:"u64",index:!1},{name:"burnToken",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1},{name:"depositor",type:"publicKey",index:!1},{name:"mintRecipient",type:"publicKey",index:!1},{name:"destinationDomain",type:"u32",index:!1},{name:"destinationTokenMessenger",type:"publicKey",index:!1},{name:"destinationCaller",type:"publicKey",index:!1}]},{name:"MintAndWithdraw",fields:[{name:"mintRecipient",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1},{name:"mintToken",type:"publicKey",index:!1}]},{name:"RemoteTokenMessengerAdded",fields:[{name:"domain",type:"u32",index:!1},{name:"tokenMessenger",type:"publicKey",index:!1}]},{name:"RemoteTokenMessengerRemoved",fields:[{name:"domain",type:"u32",index:!1},{name:"tokenMessenger",type:"publicKey",index:!1}]},{name:"SetTokenController",fields:[{name:"tokenController",type:"publicKey",index:!1}]},{name:"PauserChanged",fields:[{name:"newAddress",type:"publicKey",index:!1}]},{name:"SetBurnLimitPerMessage",fields:[{name:"token",type:"publicKey",index:!1},{name:"burnLimitPerMessage",type:"u64",index:!1}]},{name:"LocalTokenAdded",fields:[{name:"custody",type:"publicKey",index:!1},{name:"mint",type:"publicKey",index:!1}]},{name:"LocalTokenRemoved",fields:[{name:"custody",type:"publicKey",index:!1},{name:"mint",type:"publicKey",index:!1}]},{name:"TokenPairLinked",fields:[{name:"localToken",type:"publicKey",index:!1},{name:"remoteDomain",type:"u32",index:!1},{name:"remoteToken",type:"publicKey",index:!1}]},{name:"TokenPairUnlinked",fields:[{name:"localToken",type:"publicKey",index:!1},{name:"remoteDomain",type:"u32",index:!1},{name:"remoteToken",type:"publicKey",index:!1}]},{name:"Pause",fields:[]},{name:"Unpause",fields:[]},{name:"TokenCustodyBurned",fields:[{name:"custodyTokenAccount",type:"publicKey",index:!1},{name:"amount",type:"u64",index:!1}]}],errors:[{code:6e3,name:"InvalidAuthority",msg:"Invalid authority"},{code:6001,name:"InvalidTokenMessengerState",msg:"Invalid token messenger state"},{code:6002,name:"InvalidTokenMessenger",msg:"Invalid token messenger"},{code:6003,name:"InvalidOwner",msg:"Invalid owner"},{code:6004,name:"MalformedMessage",msg:"Malformed message"},{code:6005,name:"InvalidMessageBodyVersion",msg:"Invalid message body version"},{code:6006,name:"InvalidAmount",msg:"Invalid amount"},{code:6007,name:"InvalidDestinationDomain",msg:"Invalid destination domain"},{code:6008,name:"InvalidDestinationCaller",msg:"Invalid destination caller"},{code:6009,name:"InvalidMintRecipient",msg:"Invalid mint recipient"},{code:6010,name:"InvalidSender",msg:"Invalid sender"},{code:6011,name:"InvalidTokenPair",msg:"Invalid token pair"},{code:6012,name:"InvalidTokenMint",msg:"Invalid token mint"}]},MessageTransmitterIdl:{version:"0.1.0",name:"message_transmitter",instructions:[{name:"initialize",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"upgradeAuthority",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageTransmitterProgramData",isMut:!1,isSigner:!1},{name:"messageTransmitterProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"InitializeParams"}}]},{name:"transferOwnership",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"TransferOwnershipParams"}}]},{name:"acceptOwnership",accounts:[{name:"pendingOwner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"AcceptOwnershipParams"}}]},{name:"updatePauser",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UpdatePauserParams"}}]},{name:"updateAttesterManager",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UpdateAttesterManagerParams"}}]},{name:"pause",accounts:[{name:"pauser",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"PauseParams"}}]},{name:"unpause",accounts:[{name:"pauser",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"UnpauseParams"}}]},{name:"setMaxMessageBodySize",accounts:[{name:"owner",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SetMaxMessageBodySizeParams"}}]},{name:"enableAttester",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"attesterManager",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"EnableAttesterParams"}}]},{name:"disableAttester",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"attesterManager",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"DisableAttesterParams"}}]},{name:"setSignatureThreshold",accounts:[{name:"attesterManager",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SetSignatureThresholdParams"}}]},{name:"sendMessage",accounts:[{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"senderProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SendMessageParams"}}],returns:"u64"},{name:"sendMessageWithCaller",accounts:[{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"senderProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"SendMessageWithCallerParams"}}],returns:"u64"},{name:"replaceMessage",accounts:[{name:"eventRentPayer",isMut:!0,isSigner:!0},{name:"senderAuthorityPda",isMut:!1,isSigner:!0},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!0},{name:"senderProgram",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"ReplaceMessageParams"}}],returns:"u64"},{name:"receiveMessage",accounts:[{name:"payer",isMut:!0,isSigner:!0},{name:"caller",isMut:!1,isSigner:!0},{name:"authorityPda",isMut:!1,isSigner:!1},{name:"messageTransmitter",isMut:!1,isSigner:!1},{name:"usedNonces",isMut:!0,isSigner:!1},{name:"receiver",isMut:!1,isSigner:!1},{name:"systemProgram",isMut:!1,isSigner:!1},{name:"eventAuthority",isMut:!1,isSigner:!1},{name:"program",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"ReceiveMessageParams"}}]},{name:"reclaimEventAccount",accounts:[{name:"payee",isMut:!0,isSigner:!0,docs:["rent SOL receiver, should match original rent payer"]},{name:"messageTransmitter",isMut:!0,isSigner:!1},{name:"messageSentEventData",isMut:!0,isSigner:!1}],args:[{name:"params",type:{defined:"ReclaimEventAccountParams"}}]},{name:"getNoncePda",accounts:[{name:"messageTransmitter",isMut:!1,isSigner:!1}],args:[{name:"params",type:{defined:"GetNoncePDAParams"}}],returns:"publicKey"},{name:"isNonceUsed",accounts:[{name:"usedNonces",isMut:!1,isSigner:!1,docs:["Account will be explicitly loaded to avoid error when it's not initialized"]}],args:[{name:"params",type:{defined:"IsNonceUsedParams"}}],returns:"bool"}],accounts:[{name:"messageSent",type:{kind:"struct",fields:[{name:"rentPayer",type:"publicKey"},{name:"message",type:"bytes"}]}},{name:"messageTransmitter",docs:["Main state of the MessageTransmitter program"],type:{kind:"struct",fields:[{name:"owner",type:"publicKey"},{name:"pendingOwner",type:"publicKey"},{name:"attesterManager",type:"publicKey"},{name:"pauser",type:"publicKey"},{name:"paused",type:"bool"},{name:"localDomain",type:"u32"},{name:"version",type:"u32"},{name:"signatureThreshold",type:"u32"},{name:"enabledAttesters",type:{vec:"publicKey"}},{name:"maxMessageBodySize",type:"u64"},{name:"nextAvailableNonce",type:"u64"}]}},{name:"usedNonces",docs:["UsedNonces account holds an array of bits that indicate which nonces were already used","so they can't be resused to receive new messages. Array starts with the first_nonce and","holds flags for UsedNonces::MAX_NONCES. Nonces are recorded separately for each remote_domain."],type:{kind:"struct",fields:[{name:"remoteDomain",type:"u32"},{name:"firstNonce",type:"u64"},{name:"usedNonces",type:{array:["u64",100]}}]}}],types:[{name:"AcceptOwnershipParams",type:{kind:"struct",fields:[]}},{name:"DisableAttesterParams",type:{kind:"struct",fields:[{name:"attester",type:"publicKey"}]}},{name:"EnableAttesterParams",type:{kind:"struct",fields:[{name:"newAttester",type:"publicKey"}]}},{name:"GetNoncePDAParams",type:{kind:"struct",fields:[{name:"nonce",type:"u64"},{name:"sourceDomain",type:"u32"}]}},{name:"InitializeParams",type:{kind:"struct",fields:[{name:"localDomain",type:"u32"},{name:"attester",type:"publicKey"},{name:"maxMessageBodySize",type:"u64"},{name:"version",type:"u32"}]}},{name:"IsNonceUsedParams",type:{kind:"struct",fields:[{name:"nonce",type:"u64"}]}},{name:"PauseParams",type:{kind:"struct",fields:[]}},{name:"ReceiveMessageParams",type:{kind:"struct",fields:[{name:"message",type:"bytes"},{name:"attestation",type:"bytes"}]}},{name:"HandleReceiveMessageParams",type:{kind:"struct",fields:[{name:"remoteDomain",type:"u32"},{name:"sender",type:"publicKey"},{name:"messageBody",type:"bytes"},{name:"authorityBump",type:"u8"}]}},{name:"ReclaimEventAccountParams",type:{kind:"struct",fields:[{name:"attestation",type:"bytes"}]}},{name:"ReplaceMessageParams",type:{kind:"struct",fields:[{name:"originalMessage",type:"bytes"},{name:"originalAttestation",type:"bytes"},{name:"newMessageBody",type:"bytes"},{name:"newDestinationCaller",type:"publicKey"}]}},{name:"SendMessageWithCallerParams",type:{kind:"struct",fields:[{name:"destinationDomain",type:"u32"},{name:"recipient",type:"publicKey"},{name:"messageBody",type:"bytes"},{name:"destinationCaller",type:"publicKey"}]}},{name:"SendMessageParams",type:{kind:"struct",fields:[{name:"destinationDomain",type:"u32"},{name:"recipient",type:"publicKey"},{name:"messageBody",type:"bytes"}]}},{name:"SetMaxMessageBodySizeParams",type:{kind:"struct",fields:[{name:"newMaxMessageBodySize",type:"u64"}]}},{name:"SetSignatureThresholdParams",type:{kind:"struct",fields:[{name:"newSignatureThreshold",type:"u32"}]}},{name:"TransferOwnershipParams",type:{kind:"struct",fields:[{name:"newOwner",type:"publicKey"}]}},{name:"UnpauseParams",type:{kind:"struct",fields:[]}},{name:"UpdateAttesterManagerParams",type:{kind:"struct",fields:[{name:"newAttesterManager",type:"publicKey"}]}},{name:"UpdatePauserParams",type:{kind:"struct",fields:[{name:"newPauser",type:"publicKey"}]}},{name:"MathError",type:{kind:"enum",variants:[{name:"MathOverflow"},{name:"MathUnderflow"},{name:"ErrorInDivision"}]}}],events:[{name:"OwnershipTransferStarted",fields:[{name:"previousOwner",type:"publicKey",index:!1},{name:"newOwner",type:"publicKey",index:!1}]},{name:"OwnershipTransferred",fields:[{name:"previousOwner",type:"publicKey",index:!1},{name:"newOwner",type:"publicKey",index:!1}]},{name:"PauserChanged",fields:[{name:"newAddress",type:"publicKey",index:!1}]},{name:"AttesterManagerUpdated",fields:[{name:"previousAttesterManager",type:"publicKey",index:!1},{name:"newAttesterManager",type:"publicKey",index:!1}]},{name:"MessageReceived",fields:[{name:"caller",type:"publicKey",index:!1},{name:"sourceDomain",type:"u32",index:!1},{name:"nonce",type:"u64",index:!1},{name:"sender",type:"publicKey",index:!1},{name:"messageBody",type:"bytes",index:!1}]},{name:"SignatureThresholdUpdated",fields:[{name:"oldSignatureThreshold",type:"u32",index:!1},{name:"newSignatureThreshold",type:"u32",index:!1}]},{name:"AttesterEnabled",fields:[{name:"attester",type:"publicKey",index:!1}]},{name:"AttesterDisabled",fields:[{name:"attester",type:"publicKey",index:!1}]},{name:"MaxMessageBodySizeUpdated",fields:[{name:"newMaxMessageBodySize",type:"u64",index:!1}]},{name:"Pause",fields:[]},{name:"Unpause",fields:[]}],errors:[{code:6e3,name:"InvalidAuthority",msg:"Invalid authority"},{code:6001,name:"ProgramPaused",msg:"Instruction is not allowed at this time"},{code:6002,name:"InvalidMessageTransmitterState",msg:"Invalid message transmitter state"},{code:6003,name:"InvalidSignatureThreshold",msg:"Invalid signature threshold"},{code:6004,name:"SignatureThresholdAlreadySet",msg:"Signature threshold already set"},{code:6005,name:"InvalidOwner",msg:"Invalid owner"},{code:6006,name:"InvalidPauser",msg:"Invalid pauser"},{code:6007,name:"InvalidAttesterManager",msg:"Invalid attester manager"},{code:6008,name:"InvalidAttester",msg:"Invalid attester"},{code:6009,name:"AttesterAlreadyEnabled",msg:"Attester already enabled"},{code:6010,name:"TooFewEnabledAttesters",msg:"Too few enabled attesters"},{code:6011,name:"SignatureThresholdTooLow",msg:"Signature threshold is too low"},{code:6012,name:"AttesterAlreadyDisabled",msg:"Attester already disabled"},{code:6013,name:"MessageBodyLimitExceeded",msg:"Message body exceeds max size"},{code:6014,name:"InvalidDestinationCaller",msg:"Invalid destination caller"},{code:6015,name:"InvalidRecipient",msg:"Invalid message recipient"},{code:6016,name:"SenderNotPermitted",msg:"Sender is not permitted"},{code:6017,name:"InvalidSourceDomain",msg:"Invalid source domain"},{code:6018,name:"InvalidDestinationDomain",msg:"Invalid destination domain"},{code:6019,name:"InvalidMessageVersion",msg:"Invalid message version"},{code:6020,name:"InvalidUsedNoncesAccount",msg:"Invalid used nonces account"},{code:6021,name:"InvalidRecipientProgram",msg:"Invalid recipient program"},{code:6022,name:"InvalidNonce",msg:"Invalid nonce"},{code:6023,name:"NonceAlreadyUsed",msg:"Nonce already used"},{code:6024,name:"MessageTooShort",msg:"Message is too short"},{code:6025,name:"MalformedMessage",msg:"Malformed message"},{code:6026,name:"InvalidSignatureOrderOrDupe",msg:"Invalid signature order or dupe"},{code:6027,name:"InvalidAttesterSignature",msg:"Invalid attester signature"},{code:6028,name:"InvalidAttestationLength",msg:"Invalid attestation length"},{code:6029,name:"InvalidSignatureRecoveryId",msg:"Invalid signature recovery ID"},{code:6030,name:"InvalidSignatureSValue",msg:"Invalid signature S value"},{code:6031,name:"InvalidMessageHash",msg:"Invalid message hash"}]}}}}]);
//# sourceMappingURL=732.ed769a66.chunk.js.map